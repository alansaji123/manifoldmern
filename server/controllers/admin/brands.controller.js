const ErrorResponse = require("../../utils/ErrorResponse");
const { BrandModel } = require("../../db");

const addBrand = async (req, res, next) => {
  try {
    const { name, description, image } = req.body;
    const brand = new BrandModel({
      name,
      description,
      image,
    });
    const createdBrand = await brand.save();
    if (!createdBrand) {
      return next(new ErrorResponse("Failed to create brand", 400));
    }
    return res.status(201).json({
      success: true,
      data: createdBrand,
    });
  } catch (err) {
    console.log("Error while adding brand : ", err);
    next(new ErrorResponse(err.message, 500));
  }
};

const updateBrand = async (req, res, next) => {
  try {
    const { brandId, name, description, image } = req.body;
    const existingBrand = await BrandModel.findOne({
      _id: brandId,
    });
    if (!existingBrand) {
      return next(new ErrorResponse("Brand not found", 404));
    }
    const updatedBrand = await BrandModel.updateOne(
      {
        _id: brandId,
      },
      {
        name,
        description,
        image,
      }
    );
    return res.status(200).json({
      success: true,
      data: updatedBrand,
    });
  } catch (err) {
    console.log("Error while updating brand", err);
    next(new ErrorResponse(err.message, 500));
  }
};

const deleteBrand = async (req, res, next) => {
  try {
    const { brandId } = req.body;
    const existingBrand = await BrandModel.findOne({
      _id: brandId,
    });
    if (!existingBrand) {
      return next(new ErrorResponse("Brand not found", 404));
    }
    const deletedBrand = await BrandModel.deleteOne({
      _id: brandId,
    });
    return res.status(202).json({
      success: true,
      data: "Brand deleted successfully",
    });
  } catch (err) {
    console.log("error while deleting brand", err);
    next(new ErrorResponse(err.message, 500));
  }
};

const listBrands = async (req, res, next) => {
  try {
    const brands = await BrandModel.find();
    return res.status(200).json({
      success: true,
      data: brands,
    });
  } catch (err) {
    console.log("error while listing brand", err);
    next(new ErrorResponse(err.message, 500));
  }
};

module.exports = {
  addBrand,
  updateBrand,
  deleteBrand,
  listBrands,
};
