const mongoose = require('mongoose');
const User = require('./models/User'); 

const getUserByToken = async (token) => {
  try {
    const user = await User.findOne({ token: token });
    return user || null;
  } catch (err) {
    console.error('Ошибка при получении пользователя по токену:', err);
    return null;
  }
};

module.exports = {
  getUserByToken,
};
