const { sendRegisterNtt } = require('../notification/emails/registerEmail');
const User = require('../models/User'); 
const express = require('express');
const router = express.Router();

router.post('/register', async (req, res) => {
  const { token } = req.body; 

  try {
    const user = await User.findOne({ token });
    if (!user) {
      console.log('User not found with token:', token);
      return res.status(404).json({ message: 'User not found' });
    }

    const email = user.email;
    await sendRegisterNtt(email);

  } catch (error) {
    console.error('Error sending notification:', error);
    return res.status(500).json({ message: 'Error sending notification' });
  }
});

module.exports = router;

