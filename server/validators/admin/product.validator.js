const { body } = require("express-validator");

const AddProductValidator = [
  body("name").trim().isLength(1).withMessage("Name is required."),
  body("description").trim().isLength(1).withMessage("Description is required"),
  body("price")
    .isNumeric()
    .withMessage("price is required and must be a number"),
];

module.exports = {
  AddProductValidator,
};
