const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
  token: { type: String, required: true }, 
  comment: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const Review = mongoose.model('Review', ReviewSchema);

module.exports = Review;
