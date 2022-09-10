const express = require("express");
const router = express.Router();
const { signUp } = require("../../controllers/auth/auth.controller");
const { validator } = require("../../middlewares/validator.middleware");
const { signUpValidator } = require("../../validators/signup.validator");

router.post("/signup", signUpValidator, validator, signUp);

module.exports = router;
