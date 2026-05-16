class ApiError extends Error {
  constructor(Message, StatusCode) {
    super(Message);
    this.StatusCode = StatusCode;
    this.status = StatusCode >= 400 && StatusCode < 500 ? "fail" : "error";
    Error.captureStackTrace(this, this.constructor);
  }
}
module.exports = ApiError;
