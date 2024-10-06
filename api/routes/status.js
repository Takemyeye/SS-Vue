const User = require('../models/User');
const jwt = require('jsonwebtoken'); 
const express = require('express');
const router = express.Router();

router.put('/update-status/:id', async (req, res) => {
  try {
    const userId = req.params.id;

    const user = await User.findOneAndUpdate(
      { id: userId },
      { status: 'banned' },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ message: 'User status updated to banned', user });
  } catch (error) {
    res.status(500).json({ message: 'Error updating user status', error });
  }
});

router.get('/check-status', async (req, res) => {
  try {
    const token = req.headers.authorization?.split(' ')[1]; 

    if (!token) {
      return res.status(401).json({ message: 'No token provided' });
    }

    const decoded = jwt.verify(token, process.env.SECRET_KEY);

    const user = await User.findOne({ id: decoded.id });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json({ status: user.status });
  } catch (error) {
    console.error('Error checking user status:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
