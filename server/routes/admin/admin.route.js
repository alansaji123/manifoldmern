const express = require("express");
const router = express.Router();
const { ADMIN_ROUTES } = require("../../constants/route.constants");
const { adminProtected } = require("../../middlewares/protected.middleware");
const {
  addBrand,
  updateBrand,
  deleteBrand,
  listBrands,
} = require("../../controllers/admin/brands.controller");

const {
  addProduct,
  updateProduct,
  listProducts,
  deleteProduct,
} = require("../../controllers/admin/products.controller");

// admin brand routes start
const {
  AddBrandValidator,
  UpdateBrandValidator,
  DeleteBrandValidator,
} = require("../../validators/admin/brand.validator");
const {
  AddProductValidator,
} = require("../../validators/admin/product.validator");
const { validator } = require("../../middlewares/validator.middleware");
const upload = require("../../middlewares/fileupload.middleware");

router.post(
  ADMIN_ROUTES.ADD_BRAND,
  adminProtected,
  upload.single("image"),
  AddBrandValidator,
  validator,
  addBrand
);

router.put(
  ADMIN_ROUTES.UPDATE_BRAND,
  adminProtected,
  upload.single("image"),
  UpdateBrandValidator,
  validator,
  updateBrand
);

router.post(
  ADMIN_ROUTES.DELETE_BRAND,
  adminProtected,
  DeleteBrandValidator,
  validator,
  deleteBrand
);

router.get(ADMIN_ROUTES.LIST_BRANDS, adminProtected, listBrands);
// admin brands routes end

// admin products routes start
router.post(
  ADMIN_ROUTES.ADD_PRODUCT,
  adminProtected,
  upload.single("image"),
  AddProductValidator,
  validator,
  addProduct
);
// admin products routes end

module.exports = router;
