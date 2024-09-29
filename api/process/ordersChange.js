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

router.get('/orders/count', async (req, res) => {
  try {
    const ordersCount = await Order.countDocuments({});
    res.json({ count: ordersCount });
  } catch (err) {
    console.error('Ошибка при получении количества заказов:', err);
    res.status(500).json({ error: 'Ошибка сервера при получении количества заказов' });
  }
});

router.delete('/orders/:token/:createdAt', async (req, res) => {
  const { token, createdAt } = req.params;

  if (!token || !createdAt) {
    return res.status(400).json({ message: 'Token and createdAt are required' });
  }

  try {
    const result = await Order.deleteOne({ token, createdAt: new Date(createdAt) });

    if (result.deletedCount === 0) {
      return res.status(404).json({ message: 'Order not found' });
    }

    res.status(200).json({ message: 'Order deleted successfully' });
  } catch (err) {
    console.error('Ошибка при удалении заказа:', err);
    res.status(500).json({ error: 'Ошибка сервера при удалении заказа' });
  }
});

router.put('/orders/:id', async (req, res) => {
  const { id } = req.params;
  const { process } = req.body;

  if (!process) {
    return res.status(400).json({ message: 'Process status is required' });
  }

  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      id,
      { process },
      { new: true } 
    );

    if (!updatedOrder) {
      return res.status(404).json({ message: 'Order not found' });
    }

    res.status(200).json(updatedOrder);
  } catch (err) {
    console.error('Error updating order process status:', err);
    res.status(500).json({ error: 'Server error while updating order status' });
  }
});

module.exports = router;