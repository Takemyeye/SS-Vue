const express = require('express');
const fs = require('fs');
const path = require('path');
const jwt = require('jsonwebtoken');

const router = express.Router();
const ORDERS_FILE = path.join(__dirname, 'data/orders.json');
const USERS_FILE = path.join(__dirname, 'data/users.json');
const SECRET_KEY = process.env.SECRET_KEY;

// Чтение заказов из файла
const readOrdersFromFile = () => {
  try {
    const data = fs.readFileSync(ORDERS_FILE, 'utf8');
    return JSON.parse(data || '[]');
  } catch (err) {
    console.error('Ошибка при чтении файла заказов:', err);
    return [];
  }
};

// Чтение пользователей из файла
const readUsersFromFile = () => {
  try {
    const data = fs.readFileSync(USERS_FILE, 'utf8');
    return JSON.parse(data || '[]');
  } catch (err) {
    console.error('Ошибка при чтении файла пользователей:', err);
    return [];
  }
};

// Запись заказов в файл
const writeOrdersToFile = (orders) => {
  try {
    fs.writeFileSync(ORDERS_FILE, JSON.stringify(orders, null, 2));
  } catch (err) {
    console.error('Ошибка при записи файла заказов:', err);
  }
};

// Создание нового заказа
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

// Получение списка всех заказов с деталями пользователей
router.get('/orders', (req, res) => {
  try {
    const orders = readOrdersFromFile();
    const users = readUsersFromFile();

    // Обогащение заказов данными пользователя
    const ordersWithUserDetails = orders.map(order => {
      // Найти пользователя по токену
      const user = users.find(u => u.token === order.token);

      if (user) {
        return {
          ...order,
          userName: user.username,
          userEmail: user.email,
          userAvatar: user.avatar
        };
      } else {
        return order;
      }
    });

    res.json(ordersWithUserDetails);
  } catch (err) {
    console.error('Ошибка при получении заказов:', err);
    res.status(500).json({ error: 'Ошибка сервера при получении заказов' });
  }
});

// Получение количества активных заказов
router.get('/orders/count', (req, res) => {
  const orders = readOrdersFromFile();
  const activeOrdersCount = orders.length;
  res.json({ count: activeOrdersCount });
});

module.exports = router;
