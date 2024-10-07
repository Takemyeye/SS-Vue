const express = require('express');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const router = express.Router();

router.post('/update-user', async (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const userId = decoded.id;

    const { bio, nickname } = req.body;

    // Check if the nickname already exists for another user
    const existingUser = await User.findOne({ nickname, id: { $ne: userId } });
    if (existingUser) {
      return res.status(409).json({ message: 'Nickname already exists' });
    }

    const user = await User.findOneAndUpdate(
      { id: userId },
      { bio, nickname },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    return res.status(200).json({ user });
  } catch (error) {
    return res.status(500).json({ message: 'Server error', error });
  }
});

module.exports = router;
