const User = require("../modules/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { errorHandler } = require("../utils/error");
const { errorResponse, successResponse } = require("../configs/app.respond");

const signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    return next(errorHandler(400, "All fields are required"));
  }

  const hashedPassword = bcrypt.hashSync(password, 10);

  const newUser = new User({
    username,
    email,
    password: hashedPassword,
  });

  try {
    await newUser.save();
    res.json({ message: "Signup successful" });
  } catch (error) {
    next(error);
  }
};

const signin = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password || email === "" || password === "") {
    return next(errorHandler(400, "All fields are required"));
  }

  try {
    const validUser = await User.findOne({ email });
    if (!validUser) {
      return next(errorHandler(404, "User not found"));
    }
    const validPassword = bcrypt.compareSync(password, validUser.password);
    if (!validPassword) {
      return next(errorHandler(400, "Invalid password"));
    }
    const token = jwt.sign(
      { id: validUser._id, isAdmin: validUser.isAdmin },
      process.env.JWT_SECRET
    );

    const { password: pass, ...rest } = validUser._doc;

    res
      .status(200)
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .json(rest);
  } catch (error) {
    next(error);
  }
};

const forgetPassword = async (req, res) => {
  try {
    const user = await User.findOneAndReplace({ email: req.body.email });

    if (!user) {
      return res
        .status(404)
        .json(errorResponse(4, "UNKOWN ERROR", "User does not exist"));
    }
    // reset password token
    const resetToken = user.getResetPasswordToken();

    // save updatr user
    await user.save({ validateBeforeSave: false });

    //mailing data
    const url = `${process.env.APP_SERVICE_URL}/auth/forget-password/${resertToken}`;
    const subjects = "Pzssword Recovery Email";
    const message =
      "click below to reset your password, If you have not requested this email simply ignore this email.";
    const title = "Recovery Your Password";

    // sending email
    sendEmail(res, user, url, subjects, message, title);
  } catch (error) {
    res.status(500).json(errorResponse(2, "SERVER SIDE ERROR", error));
  }
};

// TODO; Controller for user reset password
const resetPassword = async (req, res) => {
  try {
    if (req.params.token && req.body.password && req.body.confirmPassword) {
      // creating token crypto hash
      const resetPasswordToken = crypto
        .createHash("sha256")
        .update(req.params.token)
        .digest("hex");

      const user = await User.findOne({
        resetPasswordToken,
        resetPasswordExpire: { $gt: Date.now() },
      });

      if (!user) {
        return res
          .status(404)
          .json(
            errorResponse(
              4,
              "UNKNOWN ACCESS",
              "Reset Password Token is invalid or has been expired"
            )
          );
      }

      if (req.body.password !== req.body.confirmPassword) {
        return res
          .status(400)
          .json(
            errorResponse(
              1,
              "FAILED",
              "Password and Confirm password does not match"
            )
          );
      }

      // reset user password in database
      user.password = req.body.password;
      user.resetPasswordToken = undefined;
      user.resetPasswordExpire = undefined;
      await user.save();

      res
        .status(200)
        .json(successResponse(0, "SUCCESS", "User password reset successful"));
    } else {
      return res
        .status(400)
        .json(errorResponse(1, "FAILED", "Please enter all required fields"));
    }
  } catch (error) {
    res.status(500).json(errorResponse(2, "SERVER SIDE ERROR", error));
  }
};

// TODO: COntroller for user change password
const changePassword = async (req, res) => {
  try {
    if (req.body.oldPassword && req.body.newPassword) {
      const { user } = req;

      if (!user) {
        return res
          .status(404)
          .json(errorResponse(4, "UNKNOWN ACCESS", "User does not exist"));
      }

      const { email } = user;
      const user2 = await User.findOne({ email }).select("+password");

      // check old password matched
      const isPasswordMatch = await user2.comparePassword(
        req.body.oldPassword.toString()
      );
      if (!isPasswordMatch) {
        return res
          .status(400)
          .json(errorResponse(1, "FAILED", "User credentials are incorrect"));
      }

      // change user password in database
      user.password = req.body.newPassword;
      await user.save();

      res
        .status(200)
        .json(successResponse(0, "SUCCESS", "User password reset successful"));
    } else {
      return res
        .status(400)
        .json(errorResponse(1, "FAILED", "Please enter all required fields"));
    }
  } catch (error) {
    res.status(500).json(errorResponse(2, "SERVER SIDE ERROR", error));
  }
};

const sendEmailVerificationLink = async (req, res) => {
  try {
    const { user } = req;

    if (!user) {
      return res
        .status(404)
        .json(errorResponse(4, "UNKNOWN ACCESS", "User does not exist"));
    }

    // check user already verified
    if (user.verified) {
      return res
        .status(400)
        .json(errorResponse(1, "FAILED", "Ops! Your mail already verified"));
    }

    // email verification token
    const verificationToken = user.getEmailVerificationToken();

    // save updated user
    await user.save({ validateBeforeSave: false });

    // mailing data
    const url = `${process.env.APP_SERVICE_URL}/auth/verify-email/${verificationToken}`;
    const subjects = "User Email Verification";
    const message =
      "Click below link to verify your email. If you have not requested this email simply ignore this email.";
    const title = "Verify Your Email";

    // sending mail
    sendEmail(res, user, url, subjects, message, title);
  } catch (error) {
    res.status(500).json(errorResponse(2, "SERVER SIDE ERROR", error));
  }
};

const emailVerification = async (req, res) => {
  try {
    if (req.params.token) {
      // creating token crypto hash
      const emailVerificationToken = crypto
        .createHash("sha256")
        .update(req.params.token)
        .digest("hex");

      const user = await User.findOne({
        emailVerificationToken,
        emailVerificationExpire: { $gt: Date.now() },
      });

      if (!user) {
        return res
          .status(404)
          .json(
            errorResponse(
              4,
              "UNKNOWN ACCESS",
              "Email verification token is invalid or has been expired"
            )
          );
      }

      // reset user password in database
      user.emailVerificationToken = undefined;
      user.emailVerificationExpire = undefined;
      user.verified = true;
      await user.save();

      res
        .status(200)
        .json(
          successResponse(0, "SUCCESS", "User email verification successful")
        );
    } else {
      return res
        .status(400)
        .json(errorResponse(1, "FAILED", "Please enter all required fields"));
    }
  } catch (error) {
    res.status(500).json(errorResponse(2, "SERVER SIDE ERROR", error));
  }
};
const refreshToken = async (req, res) => {
  try {
    const { user } = req;

    if (!user) {
      return res
        .status(404)
        .json(errorResponse(4, "UNKNOWN ACCESS", "User does not exist"));
    }

    const accessToken = user.getJWTToken();
    const refreshToken = user.getJWTRefreshToken();

    // options for cookie
    const options = {
      expires: new Date(
        Date.now() + process.env.JWT_TOKEN_COOKIE_EXPIRES * 24 * 60 * 60 * 1000
      ),
      httpOnly: true,
    };

    res.status(200).cookie("AccessToken", accessToken, options).json(
      successResponse(0, "SUCCESS", "JWT refreshToken generate successful", {
        accessToken,
        refreshToken,
      })
    );
  } catch (error) {
    res.status(500).json(errorResponse(2, "SERVER SIDE ERROR", error));
  }
};

module.exports = {
  signin,
  signup,
  forgetPassword,
  resetPassword,
  changePassword,
  sendEmailVerificationLink,
  emailVerification,
  refreshToken,
};
