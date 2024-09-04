const express = require('express');
const fs = require('fs');
const path = require('path');
const jwt = require('jsonwebtoken');
const { getUserCount } = require('./userService');
require('dotenv').config();

const router = express.Router();
const USERS_FILE = path.join(__dirname, 'data/users.json');
const SECRET_KEY = process.env.SECRET_KEY;

// Функция для чтения пользователей из файла
const readUsersFromFile = () => {
  try {
    const data = fs.readFileSync(USERS_FILE, 'utf8');
    return JSON.parse(data || '[]');
  } catch (err) {
    console.error('Ошибка при чтении файла пользователей:', err);
    return [];
  }
};

// Функция для записи пользователей в файл
const writeUsersToFile = (users) => {
  try {
    fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
  } catch (err) {
    console.error('Ошибка при записи файла пользователей:', err);
  }
};

// Генерация JWT токена для пользователя
const generateToken = (user) => {
  return jwt.sign({ id: user.id, email: user.email }, SECRET_KEY);
};

router.post('/user', (req, res) => {
  const newUser = req.body;
  let users = readUsersFromFile();

  const existingUser = users.find(u => u.id === newUser.id && u.email === newUser.email);

  if (existingUser) {
    // Если пользователь существует, возвращаем токен
    return res.status(200).json({ message: 'Пользователь найден', token: existingUser.token });
  }

  // Если пользователь не найден, создаем нового пользователя
  const token = generateToken(newUser);
  newUser.token = token;
  users.push(newUser);
  writeUsersToFile(users);

  res.status(201).json({ message: 'Пользователь сохранен', token });
});

// Получение пользователя по токену
router.get('/user', (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ error: 'Токен не предоставлен' });
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    const users = readUsersFromFile();
    const user = users.find(u => u.id === decoded.id && u.token === token);

    if (!user) {
      return res.status(404).json({ error: 'Пользователь не найден или токен неверный' });
    }

    res.json(user);
  } catch (err) {
    return res.status(401).json({ error: 'Неверный или истекший токен' });
  }
});

// Получение всех пользователей
router.get('/users', (req, res) => {
  try {
    const users = readUsersFromFile();
    res.json(users);
  } catch (err) {
    console.error('Ошибка при получении пользователей:', err);
    res.status(500).json({ error: 'Ошибка сервера' });
  }
});

router.delete('/user', (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ error: 'Токен не предоставлен' });
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    let users = readUsersFromFile();
    const initialLength = users.length;
    users = users.filter(u => u.id !== decoded.id);

    if (users.length === initialLength) {
      return res.status(404).json({ message: 'Пользователь не найден' });
    }

    writeUsersToFile(users);
    res.json({ message: 'Пользователь удален' });
  } catch (err) {
    return res.status(401).json({ error: 'Неверный или истекший токен' });
  }
});

router.get('/user-count', (req, res) => {
  try {
    const count = getUserCount();
    res.json({ count });
  } catch (err) {
    console.error('Ошибка при получении количества пользователей:', err);
    res.status(500).json({ error: 'Ошибка сервера' });
  }
});

module.exports = router;
