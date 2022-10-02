const ErrorResponse = require("../../utils/ErrorResponse");

const addProduct = async (req, res, next) => {
  try {
    const { name, description, image, price, rating } = req.body;
  } catch (err) {
    console.log("error while adding product", err);
    next(new ErrorResponse(err.message, 500));
  }
};
const updateProduct = async () => {};
const deleteProduct = () => {};
const listProducts = () => {};

module.exports = {
  addProduct,
  updateProduct,
  deleteProduct,
  listProducts,
};
