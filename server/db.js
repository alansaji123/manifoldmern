require("dotenv").config();
const mongoose = require("mongoose");

const { UserModel } = require("./models/UserModel");

mongoose.connect(process.env.DB_CONNECTION_URL, function (err) {
  if (err) {
    console.log("mongodb connection error", err);
  } else {
    console.log("mongodb connection success");
  }
});
mongoose.Promise = global.Promise;

module.exports = {
  UserModel,
};
