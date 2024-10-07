const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  id: { type: String, required: true },
  username: { type: String },
  email: { type: String, required: true },
  avatar: { type: String },
  token: { type: String },
  provider: { type: String },
  bio: { type: String },
  nickname: { type: String },
  lastBioUpdate: { type: Date }, 
  lastNicknameUpdate: { type: Date },
  status: { type: String, default: 'active' },
});

UserSchema.index({ id: 1, email: 1, username: 1 }, { unique: true });

const User = mongoose.model('User', UserSchema);

module.exports = User;
