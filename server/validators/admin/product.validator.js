const { body } = require("express-validator");

const AddProductValidator = [
  body("name").trim().isLength(1).withMessage("Name is required."),
  body("description").trim().isLength(1).withMessage("Description is required"),
  body("price")
    .isNumeric()
    .withMessage("price is required and must be a number"),
];

UpdateProductValidator = [
  body("name").trim().isLength(1).withMessage("Name is required."),
  body("description").trim().isLength(1).withMessage("Description is required"),
  body("price")
    .isNumeric()
    .withMessage("price is required and must be a number"),
  body("productId").trim().isLength(1).withMessage("Product id is require"),
];

module.exports = {
  AddProductValidator,
  UpdateProductValidator,
};
