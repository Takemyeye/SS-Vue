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

router.get('/auth/google', passport.authenticate('google', {
  scope: ['profile', 'email']
}));

router.get('/auth/google/callback', passport.authenticate('google', { session: false }), async (req, res) => {
  try {
    const user = req.user;

    const existingUser = await User.findOne({ id: user.id, email: user.email });

    let token;
    if (!existingUser) {
      token = generateToken(user);
      const newUser = new User({
        id: user.id,
        username: user.username,
        avatar: user.avatar,
        email: user.email,
        verified: user.verified,
        locale: user.locale,
        provider: 'google',
        token: token
      });

      await newUser.save();

      try {
        await Promise.race([registerNtt(token), timeout(5000)]);
      } catch (error) {
        console.error('Error or timeout during notification for new user:', error);
      }

      return res.redirect(`http://soulswap.store?token=${token}`);
    } else {
      token = existingUser.token;

      try {
        await Promise.race([registerNtt(token), timeout(5000)]);
      } catch (error) {
        console.error('Error or timeout during notification for existing user:', error);
      }

      return res.redirect(`http://soulswap.store?token=${existingUser.token}`);
    }
  } catch (error) {
    console.error('Error during Google callback:', error);
    return res.status(500).send('Server error');
  }
});

module.exports = router;
