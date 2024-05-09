const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Your API Documentation",
      version: "1.0.0",
      description: "A description of your API.",
    },
  },
  apis: ["./routes/*.js"], // Path to your API routes
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;
