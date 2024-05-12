const express = require("express");
const router = express.Router();
const authCtrl = require("../controllers/auth.controller");
const isAuth =require('../middlewares/isAuth');

router.post('/register', authCtrl.register);
router.post('/login', authCtrl.login);
/*
// routes for forgot & change password
router.post("/forgot-password", forgetPassword);
router.post("/reset-password/:token", resetPassword);

// routes for user email verification
router
  .route("/send-email-verification-link")
  .post(isAuth, sendEmailVerificationLink);
router.route("/verify-email/:token").post(isAuth, emailVerification);

// route for get user refresh JWT Token
router.route("/auth/refresh-token").get(isRefreshTokenValid, refreshToken);
*/
module.exports = router;
