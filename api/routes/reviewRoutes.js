const express = require('express');
const Review = require('../models/Reviews'); 
const User = require('../models/User');
const router = express.Router();

router.post('/reviews', async (req, res) => {
    const { token, comment } = req.body;

    if (!token || !comment) {
        return res.status(400).json({ message: 'Token and comment are required.' });
    }

    try {
        const user = await User.findOne({ token });

        if (!user || !user.nickname) {
            return res.status(403).json({ message: 'Please create a nickname.' });
        }

        const newReview = new Review({ token, comment });
        await newReview.save();

        return res.status(201).json({ message: 'Review submitted successfully.' });
    } catch (error) {
        console.error('Error occurred while processing the review:', error);
        return res.status(500).json({ message: 'Server error.', error: error.message });
    }
});

router.get('/reviews', async (req, res) => {
  try {
    const reviews = await Review.find(); 
    const reviewsWithUsers = await Promise.all(reviews.map(async (review) => {
      const user = await User.findOne({ token: review.token }); 
      return {
        comment: review.comment,
        user: {
          username: user ? user.nickname : 'Unknown', 
          avatar: user ? user.avatar : '',
        }
      };
    }));

    return res.status(200).json(reviewsWithUsers);
  } catch (error) {
    console.error('Error occurred while fetching reviews:', error);
    return res.status(500).json({ message: 'Server error.', error: error.message });
  }
});

module.exports = router;
