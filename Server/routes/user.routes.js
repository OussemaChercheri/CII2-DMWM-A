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
const avatarUpload = require("../middlewares/user.avatar.upload");
const router = express.Router();

//get user info route
router.route("/get-user").get(isAuthenticatedUser, getUser);
router.route("/get-user/:id").get(isAuthenticatedUser, isAdmin, getUserById);

// update user info route
router.route("/update-user").put(isAuthenticatedUser, updateUser);

// user profile image/avatar update
router
  .route("/avatar-update")
  .put(isAuthenticatedUser, avatarUpload.single("avatar"), avatarUpdate);

// delete user route
router.route("/delete-user").delete(isAuthenticatedUser, deleteUser);
router
  .route("/delete-user/:id")
  .delete(isAuthenticatedUser, isAdmin, deleteUserById);

// get all users list for admin
router.route("/all-users-list").get(isAuthenticatedUser, isAdmin, getUsersList);

module.exports = router;
