const express = require('express');
const User = require('../models/User');
const router = express.Router();


router.get('/users', async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (err) {
    console.error('Ошибка при получении пользователей:', err);
    res.status(500).json({ error: 'Ошибка сервера при получении пользователей' });
  }
});

router.get('/users/:id', async (req, res) => {
  try {
    const user = await User.findOne({ id: req.params.id });
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: 'Пользователь не найден' });
    }
  } catch (err) {
    console.error('Ошибка при получении пользователя:', err);
    res.status(500).json({ error: 'Ошибка сервера при получении пользователя' });
  }
});

router.post('/users', async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json(newUser);
  } catch (err) {
    console.error('Ошибка при создании пользователя:', err);
    res.status(500).json({ error: 'Ошибка сервера при создании пользователя' });
  }
});

router.put('/users/:id', async (req, res) => {
  try {
    const user = await User.findOneAndUpdate(
      { id: req.params.id },
      req.body,
      { new: true, runValidators: true }
    );
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: 'Пользователь не найден' });
    }
  } catch (err) {
    console.error('Ошибка при обновлении пользователя:', err);
    res.status(500).json({ error: 'Ошибка сервера при обновлении пользователя' });
  }
});

router.delete('/users/:id', async (req, res) => {
  try {
    const result = await User.deleteOne({ id: req.params.id });
    if (result.deletedCount === 0) {
      res.status(404).json({ error: 'Пользователь не найден' });
    } else {
      res.status(204).send();
    }
  } catch (err) {
    console.error('Ошибка при удалении пользователя:', err);
    res.status(500).json({ error: 'Ошибка сервера при удалении пользователя' });
  }
});

module.exports = router;
