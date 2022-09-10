const signUp = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    return res.status(200).json({
      success: true,
      data: { name, email, password },
    });
  } catch (err) {
    console.log("error while creating user : ", err);
  }
};

module.exports = {
  signUp,
};
