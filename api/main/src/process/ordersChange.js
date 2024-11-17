const express = require('express');
const Order = require('../models/Order');
const User = require('../models/User');   
require('dotenv').config();

const router = express.Router();

router.get('/orders', async (req, res) => {
  try {
    const orders = await Order.find({});
    const users = await User.find({});

    const ordersWithUserDetails = orders.map(order => {
      const user = users.find(u => u.token === order.token);

      if (user) {
        return {
          ...order.toObject(),
          nickName: user.nickname,
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

router.get('/orders/count', async (req, res) => {
  try {
    const ordersCount = await Order.countDocuments({});
    res.json({ count: ordersCount });
  } catch (err) {
    console.error('Ошибка при получении количества заказов:', err);
    res.status(500).json({ error: 'Ошибка сервера при получении количества заказов' });
  }
});

router.delete('/orders/:orderId', async (req, res) => {
  const { orderId } = req.params;

  if (!orderId) {
      return res.status(400).json({ message: 'Order ID is required' });
  }

  try {
      const result = await Order.deleteOne({ orderId });

      if (result.deletedCount === 0) {
          return res.status(404).json({ message: 'Order not found' });
      }

      res.status(200).json({ message: 'Order deleted successfully' });
  } catch (err) {
      console.error('Ошибка при удалении заказа:', err);
      res.status(500).json({ error: 'Ошибка сервера при удалении заказа' });
  }
});

router.put('/orders/:orderId', async (req, res) => {
  const { orderId } = req.params;
  const { status } = req.body;

  if (!status) {
    return res.status(400).json({ message: 'Status is required' });
  }

  try {
    const order = await Order.findOneAndUpdate(
      { orderId: orderId }, 
      { process: status },
      { new: true }
    );

    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    res.status(200).json(order);
  } catch (err) {
    console.error('Ошибка при обновлении заказа:', err);
    res.status(500).json({ error: 'Ошибка сервера при обновлении заказа' });
  }
});

module.exports = router;
