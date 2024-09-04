const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();
const ORDERS_FILE = path.join(__dirname, 'data/orders.json');

// Функция для чтения заказов из файла
const readOrdersFromFile = () => {
  try {
    const data = fs.readFileSync(ORDERS_FILE, 'utf8');
    return JSON.parse(data || '[]');
  } catch (err) {
    console.error('Ошибка при чтении файла заказов:', err);
    return [];
  }
};

// Функция для записи заказов в файл
const writeOrdersToFile = (orders) => {
  try {
    fs.writeFileSync(ORDERS_FILE, JSON.stringify(orders, null, 2));
  } catch (err) {
    console.error('Ошибка при записи файла заказов:', err);
  }
};

// Middleware для проверки токена
const verifyToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  if (!authHeader) {
    return res.status(401).json({ message: 'Authorization header missing' });
  }

  const token = authHeader.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: 'Token missing' });
  }

  next();
};

router.post('/userCart', verifyToken, (req, res) => {
  const newOrder = req.body;
  let orders = readOrdersFromFile();

  orders.push(newOrder);
  writeOrdersToFile(orders);

  res.status(201).json({ message: 'Order processed successfully' });
});

module.exports = router;
