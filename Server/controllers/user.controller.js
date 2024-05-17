const fs = require("fs");
const appRoot = require("app-root-path");
const bcryptjs = require("bcryptjs");
const { errorHandler } = require("../modules/user.model");
const User = require("../modules/user.model");
const logger = require("../middlewares/winston.logger");
const MyQueryHelper = require("../configs/api.feature");
const { errorResponse, successResponse } = require("../configs/app.respond");

// Controller for getting user info
const getUser = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller for getting user info using ID by admin
const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res
        .status(404)
        .json(errorResponse(4, "UNKNOWN ACCESS", "User does not exist"));
    }
    res.status(200).json(
      successResponse(0, "SUCCESS", "User information retrieved successfully", {
        id: user._id,
        username: user.username,
        email: user.email,
        role: user.role,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      })
    );
  } catch (error) {
    res.status(500).json(errorResponse(2, "SERVER SIDE ERROR", error.message));
  }
};

// Controller for updating user info
const updateUser = async (req, res) => {
  try {
    const { user } = req;
    const { username, email, role } = req.body;
    if (!user) {
      return res
        .status(404)
        .json(errorResponse(4, "UNKNOWN ACCESS", "User does not exist"));
    }
    if (!username || !email || !role) {
      return res
        .status(400)
        .json(
          errorResponse(
            1,
            "FAILED",
            "`username`, `email`, and `role` fields are required"
          )
        );
    }

    const updatedUser = await User.findByIdAndUpdate(
      user._id,
      {
        username,
        email,
        role,
      },
      { runValidators: true, new: true }
    );

    res.status(200).json(
      successResponse(0, "SUCCESS", "User info updated successfully", {
        username: updatedUser.username,
        email: updatedUser.email,
        role: updatedUser.role,
      })
    );
  } catch (error) {
    res.status(500).json(errorResponse(2, "SERVER SIDE ERROR", error.message));
  }
};

// Controller for deleting user
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User deleted" });
  } catch (error) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getUser,
  getUserById,
  updateUser,
  deleteUser,
};
