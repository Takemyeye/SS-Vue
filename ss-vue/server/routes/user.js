const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();
const USERS_FILE = path.join(__dirname, 'data/users.json');

const readUsersFromFile = () => {
  try {
    const data = fs.readFileSync(USERS_FILE, 'utf8');
    return JSON.parse(data || '[]');
  } catch (err) {
    console.error('Ошибка при чтении файла пользователей:', err);
    return [];
  }
};

router.get('/api/users', (req, res) => {
  try {
    const users = readUsersFromFile();
    res.json(users);
  } catch (err) {
    console.error('Ошибка при получении пользователей:', err);
    res.status(500).json({ error: 'Ошибка при получении пользователей' });
  }
});

module.exports = router;
