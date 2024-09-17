const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  token: { type: String, required: true },
  country: { type: String, required: true },
  cartItems: { type: Array, required: true },
  totalPrice: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now }
});

const Order = mongoose.model('Order', OrderSchema);

module.exports = Order;