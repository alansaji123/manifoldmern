const { body } = require("express-validator");

const signUpValidator = [
  body("name").trim().isLength(1).withMessage("Name is required."),
  body("email").normalizeEmail().isEmail().withMessage("Invalid email."),
  body("password").trim().isLength(1).withMessage("Password is required"),
];

const loginValidator = [
  body("email").normalizeEmail().isEmail().withMessage("Invalid email."),
  body("password").trim().isLength(1).withMessage("Password is required"),
];

module.exports = { signUpValidator, loginValidator };
