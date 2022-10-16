const bcrypt = require("bcrypt");
const { UserModel } = require("../../db");
const ErrorResponse = require("../../utils/ErrorResponse");
const isExistingUser = require("../../helpers/existingUser");
const { signUserToken } = require("../../utils/jwtfns");

/*
  Alan
  function to signup user
  @params: {
    req: { name, email, password }
    res,
    next
  }
*/
const signUp = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const existingUser = await isExistingUser(email);
    if (existingUser) {
      return next(new ErrorResponse("This email is already registered", 409));
    }
    const hashedPassword = await bcrypt.hash(password, 2);
    const user = new UserModel({
      name,
      email,
      password: hashedPassword,
      userType: "customer",
    });
    const createdUser = await user.save();
    if (!createdUser) {
      return next(new ErrorResponse("Could not create User", 400));
    }
    return res.status(200).json({
      success: true,
      data: createdUser,
    });
  } catch (err) {
    console.log("error while creating user : ", err);
    next(new ErrorResponse(err, 500));
  }
};

/*
  Alan
  function to login user
  @params: {
    req: { email, password }
    res,
    next
  }
*/
const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const existingUser = await isExistingUser(email);
    if (!existingUser) {
      return next(new ErrorResponse("Invalid email or password", 401));
    }
    const compareResult = await bcrypt.compare(password, existingUser.password);
    if (!compareResult) {
      return next(new ErrorResponse("Invalid email or password", 401));
    }
    const { name, _id, id, userType } = existingUser;
    const token = signUserToken({
      name,
      _id,
      id,
      userType,
    });
    return res.status(200).json({
      success: true,
      data: {
        message: "Login successful",
        token,
      },
    });
  } catch (err) {
    console.log("error while logging in user : ", err);
    next(new ErrorResponse(err, 500));
  }
};

/*
Alan
function to create admin user
*/

const createAdminUser = async (req, res, next) => {
  try {
    const password = "123456";
    const hashedPassword = await bcrypt.hash(password, 2);
    const user = new UserModel({
      name: "Admin",
      email: "admin@gmail.com",
      password: hashedPassword,
      userType: "admin",
    });
    const createdUser = await user.save();
    return res.status(201).json({
      success: true,
      data: "Admin user created",
    });
  } catch (err) {
    console.log("error while creating admin user", err);
    next(new ErrorResponse(err.message, 500));
  }
};

module.exports = {
  signUp,
  login,
  createAdminUser,
};
