const { UserModel } = require("../db");

const isExistingUser = async (email) => {
  const existingUser = await UserModel.findOne({
    email,
  });
  if (!existingUser) {
    return false;
  } else {
    return existingUser;
  }
};

module.exports = isExistingUser;
