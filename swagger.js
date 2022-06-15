const swaggerAutogen = require("swagger-autogen")();

const doc = {
 info: {
   title: "NodeJS_blog API",
   description: "hanghae8W API",
 },
 host: "localhost:3000",
 schemes: ["http"],
};

const outputFile = "./swagger-output.json";
const endpointsFiles = ["./app.js", "./routes/comments.js", "./routes/posts.js", "./routes/users.js"];


swaggerAutogen(outputFile, endpointsFiles, doc);