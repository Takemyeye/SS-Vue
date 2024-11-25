const User = require('../models/User');
const jwt = require('jsonwebtoken'); 
const express = require('express');
const router = express.Router();

//to banned and unbann

router.put('/update-status/:id', async (req, res) => {
  try {
    const userId = req.params.id;
    const { status } = req.body;

    if (!status) {
      return res.status(400).json({ message: 'Status is required' });
    }

    const user = await User.findOneAndUpdate(
      { id: userId },
      { status },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ message: `User status updated to ${status}`, user });
  } catch (error) {
    res.status(500).json({ message: 'Error updating user status', error });
  }
});

module.exports = router;
