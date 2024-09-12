const express = require('express');
const router = express.Router();
const Order = require('../models/Order'); 

router.get('/order', async (req, res) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; 

    if (!token) {
        return res.status(401).json({ message: 'Token not provided' });
    }

    try {
        const order = await Order.findOne({ token });

        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }

        res.status(200).json({
            items: order.cartItems,
            totalPrice: order.totalPrice
        });
    } catch (err) {
        console.error('Error fetching order:', err);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;
