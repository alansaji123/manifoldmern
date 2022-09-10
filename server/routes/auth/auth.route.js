const express = require("express");
const router = express.Router();
const { signUp, login } = require("../../controllers/auth/auth.controller");
const { validator } = require("../../middlewares/validator.middleware");
const { AUTH_ROUTES } = require("../../constants/route.constants");
const {
  signUpValidator,
  loginValidator,
} = require("../../validators/auth.validator");

router.post(AUTH_ROUTES.SIGNUP, signUpValidator, validator, signUp);
router.post(AUTH_ROUTES.LOGIN, loginValidator, validator, login);

module.exports = router;
