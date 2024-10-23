const express = require('express');
const Order = require('./models/Order');
require('dotenv').config();

const router = express.Router();

router.post('/userCart', async (req, res) => {
  const { token, cartItems, totalPrice, country, digital } = req.body;

  if (!token) {
    return res.status(400).json({ message: 'Token is required' });
  }

  if (!country || !cartItems || !totalPrice) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const newOrder = new Order({
      token,
      digital,
      country,
      cartItems,
      totalPrice,
    });

    await newOrder.save();
    res.status(201).json({ message: 'Order processed successfully', order: newOrder });
  } catch (err) {
    console.error('Ошибка при создании заказа:', err);
    res.status(500).json({ error: 'Ошибка сервера при создании заказа' });
  }
});

module.exports = router;
