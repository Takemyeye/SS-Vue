const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
  token: { type: String, required: true }, 
  comment: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  reviewId: { type: String, unique: true },
  status: { type: String, default: 'processing'},
});

const Review = mongoose.model('Review', ReviewSchema);

module.exports = Review;
