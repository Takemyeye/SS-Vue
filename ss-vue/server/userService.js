const fs = require('fs');
const path = require('path');

const USERS_FILE = path.join(__dirname, 'users.json');

const readUsersFromFile = () => {
  try {
    const data = fs.readFileSync(USERS_FILE, 'utf8');
    return JSON.parse(data || '[]');
  } catch (err) {
    console.error('Ошибка при чтении файла пользователей:', err);
    return [];
  }
};

const getUserByToken = (token) => {
  try {
    const users = readUsersFromFile();
    return users.find(u => u.token === token) || null;
  } catch (err) {
    console.error('Ошибка при получении пользователя по токену:', err);
    return null;
  }
};

module.exports = {
  getUserByToken,
};
