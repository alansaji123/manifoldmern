const ErrorResponse = require("../../utils/ErrorResponse");
const { ProductsModel } = require("../../db");

const addProduct = async (req, res, next) => {
  try {
    const { name, description, image, price } = req.body;
    const product = new ProductsModel({
      name,
      description,
      image,
      price,
    });
    const createdProduct = await product.save();
    if (!createdProduct) {
      return next(
        new ErrorResponse("Failed to create product : DB Error", 400)
      );
    }
    return res.status(201).json({
      success: true,
      data: createdProduct,
    });
  } catch (err) {
    console.log("error while adding product", err);
    next(new ErrorResponse(err.message, 500));
  }
};

const updateProduct = async (req, res, next) => {
  try {
    const { name, description, image, price, productId } = req.body;
    const existingProduct = await ProductsModel.findOne({
      _id: productId,
    });
    if (!existingProduct) {
      return next(new ErrorResponse("Product not found", 404));
    }
    const updatedProduct = await ProductsModel.updateOne(
      {
        _id: productId,
      },
      {
        name,
        description,
        image,
        price,
      }
    );
    if (!updateProduct) {
      return next(
        new ErrorResponse("Failed to update product : DB error", 400)
      );
    }
    return res.status(200).json({
      success: true,
      data: updatedProduct,
    });
  } catch (err) {
    console.log("Error while updating product ", err);
    next(new ErrorResponse(err.message, 500));
  }
};

const deleteProduct = async () => {};

const listProducts = async () => {};

module.exports = {
  addProduct,
  updateProduct,
  deleteProduct,
  listProducts,
};
