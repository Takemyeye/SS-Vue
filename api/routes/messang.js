const express = require('express');
const router = express.Router();
const client = require('../redis/redisClient');
const jwt = require('jsonwebtoken');

router.use(express.json());

router.get('/messages', async (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Токен не предоставлен' });
  }

  try {
    jwt.verify(token, process.env.SECRET_KEY);

    const messagesJson = await client.get(token);

    if (!messagesJson) {
      return res.status(200).json({ messages: [] });
    }

    const messages = JSON.parse(messagesJson);
    res.status(200).json({ messages });
  } catch (error) {
    console.error('Ошибка при обработке токена или загрузке сообщений:', error);
    res.status(500).json({ error: 'Ошибка сервера' });
  }
});

router.post('/messages', async (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Токен не предоставлен' });
  }

  try {
    jwt.verify(token, process.env.SECRET_KEY);

    const { message } = req.body;

    if (typeof message !== 'string' || !message.trim()) {
      return res.status(400).json({ error: 'Сообщение обязательно и должно быть строкой' });
    }

    const messagesJson = await client.get(token);
    let messages = [];

    if (messagesJson) {
      messages = JSON.parse(messagesJson);
    }

    messages.push({ text: message });

    await client.set(token, JSON.stringify(messages));

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Ошибка при обработке токена или сохранении сообщения:', error);
    res.status(500).json({ error: 'Ошибка сервера' });
  }
  
});

module.exports = router;
