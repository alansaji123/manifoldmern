require("dotenv").config();
const jwt = require("jsonwebtoken");

const signUserToken = (user) => {
  const token = jwt.sign(user, process.env.JWT_SECRET, { expiresIn: "2h" });
  return token;
};

const verifyUer = (token) => {
  var decoded = jwt.verify(token, process.env.JWT_SECRET);
  return decoded;
};

module.exports = {
  signUserToken,
  verifyUer,
};
