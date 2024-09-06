const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const path = require('path');
const fs = require('fs');
require('dotenv').config();

const router = express.Router();
const USERS_FILE = path.join(__dirname, '../data/users.json');
const SECRET_KEY = process.env.SECRET_KEY;

const readUsersFromFile = () => {
  try {
    const data = fs.readFileSync(USERS_FILE, 'utf8');
    return JSON.parse(data || '[]');
  } catch (err) {
    console.error('Ошибка при чтении файла пользователей:', err);
    return [];
  }
};

const writeUsersToFile = (users) => {
  try {
    fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
  } catch (err) {
    console.error('Ошибка при записи файла пользователей:', err);
  }
};

const generateToken = (user) => {
  return jwt.sign({ id: user.id, email: user.email, provider: user.provider }, SECRET_KEY );
};

router.get('/auth/google', passport.authenticate('google', {
  scope: ['profile', 'email']
}));

router.get('/auth/google/callback', passport.authenticate('google', { session: false }), (req, res) => {
  let users = readUsersFromFile();
  const user = req.user;
  const existingUser = users.find(u => u.id === user.id && u.provider === user.provider);

  if (!existingUser) {
    const token = generateToken(user);

    const newUser = {
      id: user.id,
      username: user.username,
      avatar: user.avatar,
      email: user.email,
      verified: user.verified,
      locale: user.locale,
      provider: user.provider, 
      token: token
    };

    users.push(newUser);
    writeUsersToFile(users);
    res.redirect(`http://localhost:8080?token=${token}`);
  } else {
    const token = generateToken(existingUser);
    res.redirect(`http://localhost:8080?token=${token}`);
  }
});

router.get('/auth/github', passport.authenticate('github', { scope: ['user:email'] }));

router.get('/auth/github/callback', passport.authenticate('github', { session: false }), (req, res) => {
  let users = readUsersFromFile();
  const user = req.user;
  const existingUser = users.find(u => u.id === user.id && u.provider === user.provider); 

  if (!existingUser) {
    const token = generateToken(user);

    const newUser = {
      id: user.id,
      username: user.username,
      avatar: user.avatar,
      email: user.email,
      provider: user.provider, 
      token: token
    };

    users.push(newUser);
    writeUsersToFile(users);
    res.redirect(`http://localhost:8080?token=${token}`);
  } else {
    const token = generateToken(existingUser);
    res.redirect(`http://localhost:8080?token=${token}`);
  }
});

router.get('/auth/discord', passport.authenticate('discord'));

router.get('/auth/discord/callback', passport.authenticate('discord', { session: false }), (req, res) => {
  let users = readUsersFromFile();
  const user = req.user;
  const existingUser = users.find(u => u.id === user.id && u.provider === user.provider);

  if (!existingUser) {
    const token = generateToken(user);

    const newUser = {
      id: user.id,
      username: user.username,
      avatar: user.avatar,
      email: user.email,
      provider: user.provider, 
      token: token
    };

    users.push(newUser);
    writeUsersToFile(users);
    res.redirect(`http://localhost:8080?token=${token}`);
  } else {
    const token = generateToken(existingUser);
    res.redirect(`http://localhost:8080?token=${token}`);
  }
});

router.get('/api/current_user', (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ error: 'Токен не предоставлен' });
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    const users = readUsersFromFile();
    const user = users.find(u => u.id === decoded.id && u.provider === decoded.provider); 
    if (!user) {
      return res.status(404).json({ error: 'Пользователь не найден или токен неверный' });
    }

    res.json(user);
  } catch (err) {
    return res.status(401).json({ error: 'Неверный или истекший токен' });
  }
});

module.exports = router;
