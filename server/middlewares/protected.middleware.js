const ErrorResponse = require("../utils/ErrorResponse");
const { verifyUer } = require("../utils/jwtfns");

const customerProtected = (req, res, next) => {
  try {
    const { token } = req.body;
    if (!token) {
      return next(new ErrorResponse("Unauthorized", 401));
    }
    const user = verifyUer(token);
    if (!user) {
      return next(new ErrorResponse("Unauthorized to access", 401));
    }
    if (user.type !== "customer") {
      return next(new ErrorResponse("Unauthorized to access", 401));
    }
    req.user = user;
    next();
  } catch (err) {
    console.log("error on customerProtected : ", err);
    next(new ErrorResponse("Server Error", 500));
  }
};

const adminProtected = (req, res, next) => {
  try {
    // const { token } = req.body;
    // if (!token) {
    //   return next(new ErrorResponse("Unauthorized", 401));
    // }
    // const user = verifyUer(token);
    // if (!user) {
    //   return next(new ErrorResponse("Unauthorized to access", 401));
    // }
    // if (user.type !== "admin") {
    //   return next(new ErrorResponse("Unauthorized to access", 401));
    // }
    // req.user = user;
    next();
  } catch (err) {
    console.log("error on admin protect : ", err);
    next(new ErrorResponse(err, 500));
  }
};

module.exports = {
  customerProtected,
  adminProtected,
};
