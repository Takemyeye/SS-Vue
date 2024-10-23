const User = require('../models/User');
const jwt = require('jsonwebtoken'); 
const express = require('express');
const router = express.Router();

//to banned

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

//to active

router.put('/update-status-active/:id', async (req, res) => {
  try {
    const userId = req.params.id;

    const user = await User.findOneAndUpdate(
      { id: userId },
      { status: 'active' },
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

module.exports = router;
