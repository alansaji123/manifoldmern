const { validationResult } = require("express-validator");

exports.validator = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(203).json({ success: false, errors: errors.array() });
  } else {
    next();
  }
};
