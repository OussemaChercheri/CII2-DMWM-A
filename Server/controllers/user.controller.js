const bcryptjs = require("bcryptjs");
const { errorHandler } = require("../modules/user.model");
const User = require("../modules/user.model");

const test = (req, res) => {
  res.json({ message: "API is working!" });
};

module.exports = { test };
