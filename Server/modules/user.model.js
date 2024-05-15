const mongoose = require("mongoose");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    avatar: {
      type: String,
      default:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    },
    password: {
      type: String,
      required: true,
      minlength: [6, "Too short password"],
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    verified: {
      type: Boolean,
      default: false,
    },
    emailVerificationToken: String, // Added field for email verification token
    emailVerificationExpire: Date, // Added field for email verification token expiration
  },
  { timestamps: true }
);

// JWT Access Token
userSchema.methods.getJWTToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_ACCESS_TOKEN_EXPIRES,
  });
};

// JWT Refresh Token
userSchema.methods.getJWTRefreshToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_REFRESH_TOKEN_SECRET_KEY, {
    expiresIn: process.env.JWT_REFRESH_TOKEN_EXPIRES,
  });
};

// Generating email verification token
userSchema.methods.generateEmailVerificationToken = function () {
  const verificationToken = crypto.randomBytes(20).toString("hex");

  // Hashing and adding emailVerificationToken to userSchema
  this.emailVerificationToken = crypto
    .createHash("sha256")
    .update(verificationToken)
    .digest("hex");

  this.emailVerificationExpire = Date.now() + 15 * 60 * 1000;
  return verificationToken;
};

const User = mongoose.model("Users", userSchema);

module.exports = User;
