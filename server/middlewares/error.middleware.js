const errorHandler = (err, req, res, next) => {
  console.log(err);
  let error = { ...err };
  error.message = err.message;

  res.status(error.statusCode || 500).json({
    success: false,
    error: error.message || "Server Error",
    message: error.message || "Server Error",
  });
};

module.exports = errorHandler;
