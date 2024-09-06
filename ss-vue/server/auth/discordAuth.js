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
  return jwt.sign({ id: user.id, email: user.email }, SECRET_KEY);
};

router.get('/auth/discord', passport.authenticate('discord', { scope: ['identify', 'email'] }));

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
    res.redirect(`http://localhost:8080?token=${existingUser.token}`);
  }
});

module.exports = router;
