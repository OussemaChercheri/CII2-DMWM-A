const { errorHandler, errorResponse } = require("../configs/app.respond");

exports.notFoundRoute = (req, res, next) => {
  res
    .status(404)
    .json(
      errorResponse(
        4,
        "UNKNOWN ACCESS",
        "Sorry! Your request url was not found."
      )
    );
};

exports.errorHandler = (req, res, next) => {
  if (res.headersSent) {
    return next("Something went wrong. App server error.");
  }
  if (err.message) {
    res.status(500).json(errorResponse(2, "SERVER SIDE ERROR", err.message));
  } else {
    res
      .status(500)
      .json(
        errorResponse(
          2,
          "SERVER SIDE ERROR",
          "Something went wrong. There was an error."
        )
      );
  }
};
