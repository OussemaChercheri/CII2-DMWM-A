const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
<<<<<<< HEAD:back/src/models/user.js
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
=======
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
>>>>>>> 8abc042b25d79bc46e35cbcefe1833c1611a4e83:Server/modules/user.js
});

const User = mongoose.model('User', userSchema);

module.exports = User;
