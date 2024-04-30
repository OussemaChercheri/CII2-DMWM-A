const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  userId: {
    type: Number,
    unique: true,
    required: true
  },
  userName: {
    type: String
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  pwd: {
    type: String,
    required: true
  },
  userType: {
    type: String,
    required: true
  },
  resetLink: {
    type: String
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
