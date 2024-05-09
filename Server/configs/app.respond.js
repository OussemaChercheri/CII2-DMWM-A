const currentDateTime = require("../lib/current.date.time");

const successResponse = (resultCode, title, message, data, maintenance) => ({
  result_code: resultCode,
  time: currentDateTime(),
  maintenance_info: maintenance || null,
  result: {
    title,
    message,
    data,
  },
});

const errorResponse = (resultCode, title, error, maintenance) => ({
  result_code: resultCode,
  time: currentDateTime(),
  maintenance_info: maintenance || null,
  result: {
    title,
    error,
  },
});

module.exports = { errorResponse, successResponse };
