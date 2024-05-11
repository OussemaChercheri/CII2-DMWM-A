const express = require("express");
const router = express.Router();
const {
  signin,
  signup,
  forgetPassword,
  resetPassword,
  sendEmailVerificationLink,
  emailVerification,
  refreshToken,
} = require("../controllers/auth.controller");
const {
  isAuthenticatedUser,
  isRefreshTokenValid,
} = require("../middlewares/app.authentification");

router.post("/signup", signup);
router.post("/signin", signin);

// routes for forgot & change password
router.post("/forgot-password", forgetPassword);
router.post("/reset-password/:token", resetPassword);

// routes for user email verification
router
  .route("/auth/send-email-verification-link")
  .post(isAuthenticatedUser, sendEmailVerificationLink);
router
  .route("/auth/verify-email/:token")
  .post(isAuthenticatedUser, emailVerification);

// route for get user refresh JWT Token
router.route("/auth/refresh-token").get(isRefreshTokenValid, refreshToken);
module.exports = router;
