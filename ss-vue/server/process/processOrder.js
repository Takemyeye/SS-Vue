const Order = require('../models/Order'); 
const express = require('express');
const router = express.Router();

router.get('/orders', async (req, res) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; 

    if (!token) {
        return res.status(401).json({ message: 'Token not provided' });
    }

    try {
        const orders = await Order.find({ token });

        if (orders.length === 0) {
            return res.status(404).json({ message: 'No orders found' });
        }

        res.status(200).json(orders);
    } catch (err) {
        console.error('Error fetching orders:', err);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;
