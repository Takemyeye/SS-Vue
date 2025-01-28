const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { registerNtt } = require('../fetch/registerNttFetch');
require('dotenv').config();

const router = express.Router();
const SECRET_KEY = process.env.SECRET_KEY;

const generateToken = (user) => {
  return jwt.sign({ id: user.id, email: user.email }, SECRET_KEY);
};

const timeout = (ms) => new Promise(resolve => setTimeout(resolve, ms));

router.get('/auth/discord', passport.authenticate('discord', { scope: ['identify', 'email'] }));

router.get('/auth/discord/callback', passport.authenticate('discord', { session: false }), async (req, res) => {
  try {
    const user = req.user;

    if (!user) {
      return res.status(401).send('User not authenticated');
    }

    const existingUser = await User.findOne({ id: user.id, email: user.email });
    let token;

    if (!existingUser) {
      token = generateToken(user);

      const newUser = new User({
        id: user.id,
        username: user.username,
        avatar: user.avatar,
        email: user.email,
        provider: 'discord', // Указываем источник аутентификации
        token: token
      });

      await newUser.save();

      try {
        await Promise.race([registerNtt(token), timeout(5000)]);
      } catch (error) {
        console.error('Error or timeout during notification for new user:', error);
      }

      return res.redirect(`https://soulswap.store?token=${token}`);
    } else {
      token = existingUser.token;

      try {
        await Promise.race([registerNtt(token), timeout(5000)]);
      } catch (error) {
        console.error('Error or timeout during notification for existing user:', error);
      }

      return res.redirect(`https://soulswap.store?token=${existingUser.token}`);
    }
  } catch (err) {
    console.error('Error during Discord callback:', err);
    return res.status(500).send('Server error');
  }
});

module.exports = router;
