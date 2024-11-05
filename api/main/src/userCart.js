const express = require('express');
const crypto = require('crypto');
const Order = require('./models/Order');
require('dotenv').config();

const router = express.Router();

// Funcion for generate UniqueId
function generateUniqueId() {
  return crypto.randomBytes(4).toString('hex'); // Hex id
}

async function generateUniqueOrderId() {
  let orderId;
  let orderExists = true;

  while (orderExists) {
    orderId = generateUniqueId(); // generate ID
    orderExists = await Order.findOne({ orderId }); // check ID
  }

  return orderId;
}

router.post('/userCart', async (req, res) => {
  const { token, cartItems, totalPrice, country, digital } = req.body;

  if (!token) {
    return res.status(400).json({ message: 'Token is required' });
  }

  if (!country || !cartItems || !totalPrice) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const orderId = await generateUniqueOrderId();

    const newOrder = new Order({
      token,
      digital,
      country,
      cartItems,
      totalPrice,
      orderId,
    });

    await newOrder.save();
    res.status(201).json({ message: 'Order processed successfully', order: newOrder });
  } catch (err) {
    console.error('Ошибка при создании заказа:', err);
    res.status(500).json({ error: 'Ошибка сервера при создании заказа' });
  }
});

module.exports = router;
