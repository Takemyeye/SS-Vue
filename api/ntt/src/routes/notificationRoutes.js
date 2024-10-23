const UserNotification = require('../models/UserNotification');
const User = require('../models/User'); 
const jwt = require('jsonwebtoken');
const express = require('express');

const router = express.Router();

// Decode email from token
const getEmailFromToken = (token) => {
  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY); 
    return decoded.email;
  } catch {
    return null;
  }
};

// POST user notifications
router.post('/user/notifications', async (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];
  const userEmail = getEmailFromToken(token);

  if (!userEmail) {
    return res.status(401).json({ message: 'Недействительный токен' });
  }

  const { toggleId, value } = req.body;

  try {
    const user = await User.findOne({ email: userEmail });

    if (!user) {
      return res.status(404).json({ message: 'Пользователь не найден' });
    }

    let userNotification = await UserNotification.findOne({ email: userEmail });

    if (!userNotification) {
      userNotification = new UserNotification({
        email: userEmail,
        token: user.token,
        marketingEmails: false,
        orderNotifications: false,
      });
    }

    // Update the notification preference
    if (toggleId === 'marketingEmails') {
      userNotification.marketingEmails = value;
    } else if (toggleId === 'orderNotifications') {
      userNotification.orderNotifications = value;
    }

    await userNotification.save();

    res.status(200).json({ message: 'Настройки уведомлений обновлены' });
  } catch (error) {
    console.error('Ошибка при обновлении уведомлений:', error);
    res.status(500).json({ message: 'Ошибка сервера' });
  }
});

// GET user notifications
router.get('/user/notifications', async (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];
  const userEmail = getEmailFromToken(token);

  if (!userEmail) {
    return res.status(401).json({ message: 'Недействительный токен' });
  }

  try {
    const userNotification = await UserNotification.findOne({ email: userEmail });

    if (!userNotification) {
      return res.status(200).json({ marketingEmails: false, orderNotifications: false });
    }

    res.status(200).json({
      marketingEmails: userNotification.marketingEmails,
      orderNotifications: userNotification.orderNotifications,
    });
  } catch (error) {
    console.error('Ошибка при получении настроек уведомлений:', error);
    res.status(500).json({ message: 'Ошибка сервера' });
  }
});

module.exports = router;
