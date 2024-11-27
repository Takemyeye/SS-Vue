const express = require('express');
const Review = require('../models/Reviews'); 
const User = require('../models/User');
const router = express.Router();

// post Reviews
function generateUniqueId() {
  return Math.random().toString(36).substr(2, 9); 
}

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

      const lastReview = await Review.findOne({ token }).sort({ createdAt: -1 });

      if (lastReview) {
          const currentDate = new Date();
          const lastReviewDate = new Date(lastReview.createdAt);
          
          const timeDifference = currentDate - lastReviewDate;
          const oneDayInMilliseconds = 24 * 60 * 60 * 1000;

          if (timeDifference < oneDayInMilliseconds) {
              return res.status(403).json({ message: 'You can only submit one review per day.' });
          }
      }

      // reviewId
      let reviewId;
      let reviewExists = true;
      while (reviewExists) {
          reviewId = generateUniqueId(); // generate ID
          reviewExists = await Review.findOne({ reviewId }); // check for unicum
      }

      const newReview = new Review({ token, comment, createdAt: new Date(), reviewId });
      await newReview.save();

      return res.status(201).json({ message: 'Review submitted successfully.', reviewId });
  } catch (error) {
      console.error('Error occurred while processing the review:', error);
      return res.status(500).json({ message: 'Server error.', error: error.message });
  }
});

// get Reviews

router.get('/reviews', async (req, res) => {
  try {
    const reviews = await Review.find();
    const reviewsWithUsers = await Promise.all(
      reviews.map(async (review) => {
        const user = await User.findOne({ token: review.token }); 
        return {
          comment: review.comment,
          user: {
            username: user ? user.nickname : 'Unknown',
            avatar: user ? user.avatar : '',
          },
          status: review.status,
          date: review.createdAt,
        };
      })
    );

    return res.status(200).json(reviewsWithUsers);
  } catch (error) {
    console.error('Error occurred while fetching reviews:', error);
    return res.status(500).json({ message: 'Server error.', error: error.message }); 
  }
});


// get by Token Reviews
router.get('/reviews/:token', async (req, res) => {
  const { token } = req.params;

  if (!token) {
      return res.status(400).json({ message: 'Token is required.' });
  }

  try {
      const reviews = await Review.find({ token });

      const user = await User.findOne({ token });
      const reviewsWithUser = reviews.map(review => ({
          comment: review.comment,
          user: {
              username: user ? user.nickname : 'Unknown',
              avatar: user ? user.avatar : '',
          },
          date: review.createdAt,
          reviewId: review.reviewId,
      }));

      return res.status(200).json(reviewsWithUser.length > 0 ? reviewsWithUser : []);
  } catch (error) {
      console.error('Error occurred while fetching reviews by token:', error);
      return res.status(500).json({ message: 'Server error.', error: error.message || 'Unknown error' });
  }
});


// delete Review by reviewId
router.delete('/reviews/:reviewId', async (req, res) => {
  const { reviewId } = req.params;

  if (!reviewId) {
      return res.status(400).json({ message: 'Review ID is required.' });
  }

  try {
      const deletedReview = await Review.findOneAndDelete({ reviewId });

      if (!deletedReview) {
          return res.status(404).json({ message: 'Review not found.' });
      }

      return res.status(200).json({ message: 'Review deleted successfully.' });
  } catch (error) {
      console.error('Error occurred while deleting the review:', error);
      return res.status(500).json({ message: 'Server error.', error: error.message });
  }
});

module.exports = router;
