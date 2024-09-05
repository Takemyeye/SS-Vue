// routes/user.js
const express = require('express');
const path = require('path');
const fs = require('fs');
const router = express.Router();

// Путь к файлу users.json
const USERS_FILE = path.join(__dirname, '../data/users.json');

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

// Получение всех пользователей
router.get('/users', (req, res) => {
  const users = readUsersFromFile();
  res.json(users);
});

// Получение пользователя по ID
router.get('/users/:id', (req, res) => {
  const users = readUsersFromFile();
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ error: 'Пользователь не найден' });
  }
});

router.post('/users', (req, res) => {
  const users = readUsersFromFile();
  const newUser = req.body;
  users.push(newUser);
  writeUsersToFile(users);
  res.status(201).json(newUser);
});

router.put('/users/:id', (req, res) => {
  const users = readUsersFromFile();
  const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));
  if (userIndex !== -1) {
    users[userIndex] = { ...users[userIndex], ...req.body };
    writeUsersToFile(users);
    res.json(users[userIndex]);
  } else {
    res.status(404).json({ error: 'Пользователь не найден' });
  }
});

router.delete('/users/:id', (req, res) => {
  let users = readUsersFromFile();
  users = users.filter(u => u.id !== parseInt(req.params.id));
  writeUsersToFile(users);
  res.status(204).send();
});

module.exports = router;
