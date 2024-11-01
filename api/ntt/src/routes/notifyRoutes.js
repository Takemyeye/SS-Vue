// В бэкенде
const  { sendOrderNotification }  = require('../notification/emails/ordersEmail');
const Notification = require('../models/UserNotification'); 
const express = require('express');
const router = express.Router(); 

router.post('/notify', async (req, res) => {
  const { orderId, token, totalPrice } = req.body; 

  if (!orderId || !token) {
    return res.status(400).json({ message: 'orderId and token are required' });
  }

  try {
    const user = await Notification.findOne({ token });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const email = user.email;
    
    await sendOrderNotification(email, orderId, totalPrice);

    return res.status(200).json({ message: 'Notification sent successfully' }); 
  } catch (error) {
    console.error('Error sending notification:', error);
    return res.status(500).json({ message: 'Error sending notification' });
  }
});

module.exports = router;
