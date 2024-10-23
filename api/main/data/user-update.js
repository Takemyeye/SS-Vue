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

    const user = await User.findOne({ id: userId });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const now = new Date();
    
    if (bio) {
      const lastBioUpdate = user.lastBioUpdate || new Date(0);
      const bioTimeDifference = now - lastBioUpdate;
      
      if (bioTimeDifference < 24 * 60 * 60 * 1000) {
        return res.status(403).json({
          message: 'You can update your bio only once per day.',
        });
      }
      user.bio = bio;
      user.lastBioUpdate = now; 
    }

    if (nickname) {
      const lastNicknameUpdate = user.lastNicknameUpdate || new Date(0);
      const nicknameTimeDifference = now - lastNicknameUpdate;

      if (nicknameTimeDifference < 24 * 60 * 60 * 1000) {
        return res.status(403).json({
          message: 'You can update your nickname only once per day.',
        });
      }

      const existingUser = await User.findOne({ nickname, id: { $ne: userId } });
      if (existingUser) {
        return res.status(409).json({ message: 'Nickname already exists' });
      }
      
      user.nickname = nickname;
      user.lastNicknameUpdate = now; 
    }

    await user.save();

    return res.status(200).json({ user });
  } catch (error) {
    return res.status(500).json({ message: 'Server error', error });
  }
});

module.exports = router;
