const express = require("express");
const router = express.Router();
const {
  addItemsToCart,
} = require("../../controllers/customer/cart.controller");
const { customerProtected } = require("../../middlewares/protected.middleware");
const { CUSTOMER_ROUTES } = require("../../constants/route.constants");

router.post(CUSTOMER_ROUTES.CART, customerProtected, addItemsToCart);

module.exports = router;
