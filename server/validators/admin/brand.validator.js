const { body } = require("express-validator");

const AddBrandValidator = [
  body("name").trim().isLength(1).withMessage("Name is required."),
  body("description").trim().isLength(1).withMessage("Description is required"),
];

const UpdateBrandValidator = [
  body("brandId").isLength(1).withMessage("Brand id is required"),
  body("name").trim().isLength(1).withMessage("Brand name is required"),
  body("description")
    .trim()
    .isLength(1)
    .withMessage("Brand description is required"),
];

const DeleteBrandValidator = [
  body("brandId").isLength(1).withMessage("brandId is required"),
];

module.exports = {
  AddBrandValidator,
  UpdateBrandValidator,
  DeleteBrandValidator,
};
