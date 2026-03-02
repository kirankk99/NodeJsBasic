module.exports = (err, req, res, next) => {
  console.error(err.stack);

  res.status(err.StatusCode || 500).json({
    status: err.status || "error",
    statusCode: err.StatusCode,
    message: err.message || "Internal Server Error",
  });
};
