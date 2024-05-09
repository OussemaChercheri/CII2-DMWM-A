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
      if (username && email && role) {
        //update user info & save database
        const updateUser = await User.findByIdAndUpdate(
          user._id,
          {
            username,
            email,
            role,
          },
          { runValidators: true, new: true }
        );
        res.status(200).json(
          sucessResponse(0, "SUCCESS", "User info updates successful", {
            username: updateUser.username,
            email: updateUser.email,
            role: updateUser.role,
          })
        );
      } else {
        // check if username is empty
        if (!username) {
          return res
            .status(400)
            .json(
              errorResponse(1, "FAILED", "User `username` fiels is required")
            );
        }
      }
    }
  } catch (error) {
    res.status(500).json(errorResponse(2, "SERVER SIDE ERROR", error));
  }
};

// TODO: Controller for update user avatar/image
/*const avatarUpadte = async (req, res) => {
  try {
    const { user, file} = req;

    if (!user) {
      return res.status(401).json(errorResponse(
        4,
        'UNKNOWN ACCESS',
        'User does not exist'
      )
      );
    }
    if (file) {
      // if find to delete user old avatar
      if (user?.avatar?.includes('/uploads/users')) {
        fs.unlink(`${appRot}/public/${user.avatar}`, (err) => {
          if (err) { logger.error(err); }
        });
      }

      // update user info & save database
      const updatedUser = await User.findByIdAndUpdate(
        user._id,
        { avatar: `/uploads/${file.filename}` },
        { runValidators: true, new: true }
      );

      res.status(200).json(successResponse(
        0,
        'SUCCESS',
        'User avatar updated successful',
        {
          username: updatedUser.userName,
          email: updatedUser.email,
          avatar: process.env.APP_BASE_URL + updatedUser.avatar,
        }
      ));
    } else {
      return res.status(400).json(errorResponse(
        1,
        'FAILED',
        'User `avatar` field is required'
      ));
    }
  } catch (error) {
    // if any error delete uploaded avatar image

    if (req?.file?.filename) {
      fs.unlink(`${appRoot}/public/uploads/users/${req.file.filename}`, (err) => {
        if (err) { logger.error(err); }
      });
  }
  res.status(500).json(errorResponse(
      2,
      'SERVER SIDE ERROR',
      error
    ));
  }
}*/

const deleteUser = async (req, res) => {
  try {
    const { user } = req;

    if (!user) {
      return res
        .status(404)
        .json(errorResponse(4, "UNKNOWN ACCESS", "User does not exist"));
    }

    // delete user form database
    await User.findByIdAndDelete(user.id);

    // user avatar image delete if available
    if (user?.avatar) {
      const userAvatar = user.avatar.includes("/uploads/users");

      if (userAvatar) {
        fs.unlink(`${appRoot}/public${user.avatar}`, (err) => {
          if (err) {
            logger.error(err.message);
          }
        });
      }
    }

    res
      .status(200)
      .json(
        successResponse(0, "SUCCESS", "User delete form database successful")
      );
  } catch (error) {
    res.status(500).json(errorResponse(2, "SERVER SIDE ERROR", error));
  }
};

/* TODO: Controller for delete user using id by admin
const deleteUserById = async (req, res) => {
  try {
    //check if user exists
    const user = await User.findById(req.params.id);

    if (!user) {
      return res
        .status(400)
        .json(errorResponse(1, "FAILED", "Sorry! You can't delete yourself"));

      // delete user from database
      await User.findByIdAndDelete(user.id);

      // user avatar image delete if available
      if (user?.avatar) {
        const userAvatar = user.avatar.includes("/uploads/users");

        if (userAvatar) {
          fs.unlink(`${appRoot}/public${user.avatar}`, (err) => {
            if (err) {
              logger.error(err.message);
            }
          });
        }
      }

      res
        .status(200)
        .json(
          successResponse(0, "SUCCESS", "User delete form database successful")
        );
    }
  } catch (error) {
    res.status(500).json(errorResponse(2, "SERVER SIDE ERROR", error));
  }
};
*/
module.exports = {
  getUser,
  getUserById,
  updateUser,
  deleteUser,
};
