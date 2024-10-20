const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
  email: { type: String, required: true },
  token: { type: String, required: true },
  marketingEmails: { type: Boolean, default: true },
  orderNotifications: { type: Boolean, default: true },
});

module.exports = mongoose.model('Notification', notificationSchema);
