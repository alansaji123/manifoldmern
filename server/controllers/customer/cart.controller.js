const ErrorResponse = require("../../utils/ErrorResponse");

const addItemsToCart = (req, res, next) => {
  try {
    console.log("current user : ", req.user);
    return res.status(201).json({
      success: true,
      data: "ok",
    });
  } catch (err) {
    console.log("error while adding item to cart : ", err);
    next(new ErrorResponse(err.message, 500));
  }
};

module.exports = {
  addItemsToCart,
};
