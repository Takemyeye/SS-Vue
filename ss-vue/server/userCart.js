const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();
const ORDERS_FILE = path.join(__dirname, 'data/orders.json');

const readOrdersFromFile = () => {
  try {
    const data = fs.readFileSync(ORDERS_FILE, 'utf8');
    return JSON.parse(data || '[]');
  } catch (err) {
    console.error('Ошибка при чтении файла заказов:', err);
    return [];
  }
};

const writeOrdersToFile = (orders) => {
  try {
    fs.writeFileSync(ORDERS_FILE, JSON.stringify(orders, null, 2));
  } catch (err) {
    console.error('Ошибка при записи файла заказов:', err);
  }
};

router.post('/userCart', (req, res) => {
  const { token, cartItems, totalPrice, country } = req.body;

  if (!token) {
    return res.status(400).json({ message: 'Token is required' });
  }

  if (!country || !cartItems || !totalPrice) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const createdAt = new Date().toISOString();
  const newOrder = { token, country, cartItems, totalPrice, createdAt };

  let orders = readOrdersFromFile();
  orders.push(newOrder);
  writeOrdersToFile(orders);

  res.status(201).json({ message: 'Order processed successfully', order: newOrder });
});

module.exports = router;
