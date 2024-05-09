const express = require("express");
const {
  getUser,
  getUserById,
  updateUser,
  deleteUser,
} = require("../controllers/user.controller");
const {
  isAuthenticatedUser,
  isAdmin,
} = require("../middlewares/app.authentification");

const router = express.Router();

//get user info route
router.route("/get-user").get(isAuthenticatedUser, getUser);
router.route("/get-user/:id").get(isAuthenticatedUser, isAdmin, getUserById);

// update user info route
router.route("/update-user").put(isAuthenticatedUser, updateUser);

// user profile image/avatar update
router.route("/avatar-update");

// delete user route
router.route("/delete-user").delete(isAuthenticatedUser, deleteUser);

module.exports = router;
