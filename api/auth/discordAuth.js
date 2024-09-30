const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
require('dotenv').config();

const router = express.Router();
const SECRET_KEY = process.env.SECRET_KEY;

const generateToken = (user) => {
  return jwt.sign({ id: user.id, email: user.email }, SECRET_KEY);
};

router.get('/auth/discord', passport.authenticate('discord', { scope: ['identify', 'email'] }));

router.get('/auth/discord/callback', passport.authenticate('discord', { session: false }), async (req, res) => {
  try {
    const user = req.user;
    
    if (!user) {
      return res.status(401).send('User not authenticated');
    }

    const existingUser = await User.findOne({ id: user.id, provider: user.provider });

    if (!existingUser) {
      const token = generateToken(user);
      const newUser = new User({
        id: user.id,
        username: user.username,
        avatar: user.avatar,
        email: user.email,
        provider: user.provider,
        token: token
      });

      await newUser.save();
      return res.redirect(`https://soulswap.netlify.app?token=${token}`);
    } else {
      return res.redirect(`https://soulswap.netlify.app?token=${existingUser.token}`);
    }
  } catch (err) {
    console.error('Error during Discord callback:', err);
    return res.status(500).send('какого хуя Server error');
  }
});


module.exports = router;
