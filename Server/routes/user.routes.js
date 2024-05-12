const express = require("express");
const {
  getUser,
  getUserById,
  updateUser,
  deleteUser,
} = require("../controllers/user.controller");
const isAuth = require("../middlewares/isAuth");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: User management
 */

// Get user info route
/**
 * @swagger
 * /users/get-user:
 *   get:
 *     summary: Get user information
 *     tags: [Users]
 *     description: Retrieve user information
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: A JSON object containing user information
 *       401:
 *         description: Unauthorized
 */
router.route("/get-user").get(isAuth, getUser);

// Get user by ID route
/**
 * @swagger
 * /users/get-user/{id}:
 *   get:
 *     summary: Get user by ID
 *     tags: [Users]
 *     description: Retrieve user information by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: User ID
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: A JSON object containing user information
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden
 *       404:
 *         description: User not found
 */
router.route("/get-user/:id").get(isAuth, getUserById);

// Update user info route
/**
 * @swagger
 * /users/update-user:
 *   put:
 *     summary: Update user information
 *     tags: [Users]
 *     description: Update user information
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: User information updated successfully
 *       401:
 *         description: Unauthorized
 */
router.route("/update-user").put(isAuth, updateUser);

// Delete user route
/**
 * @swagger
 * /users/delete-user:
 *   delete:
 *     summary: Delete user
 *     tags: [Users]
 *     description: Delete user account
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: User deleted successfully
 *       401:
 *         description: Unauthorized
 */
router.route("/delete-user").delete(isAuth, deleteUser);

module.exports = router;
