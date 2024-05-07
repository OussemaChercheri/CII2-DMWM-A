const fs = require("fs");
const appRoot = require("app-root-path");
const bcryptjs = require("bcryptjs");
const { errorHandler } = require("../modules/user.model");
const User = require("../modules/user.model");
const logger = require("../middlewares/winston.logger");
const MyQueryHelper = require("../configs/api.feature");
const { errorResponse, successResponse } = require("../configs/app.respond");

// TODO: Controller for get user info

const getUser = async (req, res) => {
  try {
    const { user } = req;
    if (!user) {
      return res
        .status(404)
        .json(errorResponse(4, "UNKNOWN ACCESS", "User does not exist"));
    }
    res.status(200).json(
      successResponse(0, "SUCCESS", "User information get successful", {
        username: user.username,
        email: user.email,
        role: user.role,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      })
    );
  } catch (error) {
    res.status(500).json(errorResponse(2, "SERVER SIDE ERROR", error));
  }
};

// TODO: Controller for get user info using id by admin

const getUserById = async (res, res) => {
  try {
    //chek if user exists
    const user = await User.findById(req.params.id);

    if (!user) {
      return res
        .status(404)
        .json(errorResponse(4, "UNKNOWN ACCESS", "User does not exist"));
    }
    res;
    status(200).json(
      successResponse(0, "SUCCESS", "User information get successful", {
        id: user._id,
        username: user.username,
        email: user.email,
        role: user.role,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      })
    );
  } catch (error) {
    res.status(500).json(errorResponse(2, "SERVER SIDE ERROR", error));
  }
};

// TODO: Controller for update user info

const updateUser = async (req, res) => {
  try {
    const { user } = req;
    const { username, email } = req.body;
    if (!user) {
      return res
        .status(404)
        .json(errorResponse(4, "UNKNOWN ACCESS", "User does not exist"));
      if (username && email) {
      }
    }
  } catch (error) {}
};
