const ErrorResponse = require("../utils/ErrorResponse");

const customerProtected = (req, res, next) => {
  try {
  } catch (err) {
    console.log("error on customerProtected : ", err);
    next(new ErrorResponse(err, 500));
  }
};

const adminProtected = (req, res, next) => {
  try {
  } catch (err) {
    console.log("error on admin protect : ", err);
    next(new ErrorResponse(err, 500));
  }
};
