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

router.get('/auth/google', passport.authenticate('google', {
  scope: ['profile', 'email']
}));

router.get('/auth/google/callback', passport.authenticate('google', { session: false }), async (req, res) => {
  const user = req.user;
  
  const existingUser = await User.findOne({ id: user.id, email: user.email });

  if (!existingUser) {
    const token = generateToken(user);

    const newUser = new User({
      id: user.id,
      username: user.username,
      avatar: user.avatar,
      email: user.email,
      verified: user.verified,
      locale: user.locale,
      token: token
    });

    await newUser.save();
    res.redirect(`http://localhost:8080?token=${token}`);
  } else {
    res.redirect(`http://localhost:8080?token=${existingUser.token}`);
  }
});

module.exports = router;
