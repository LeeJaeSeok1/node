require("dotenv").config();
const express = require("express");
const connect = require("./schemas");
const cors = require('cors');
const app = express();
const port = process.env.PORT;
connect();
//라우터
const postsRouter = require("./routes/posts");
const usersRouter = require("./routes/users");
const commentsRouter = require("./routes/comments");


// 스웨거
const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./swagger-output");


app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerFile));
//미들웨어
app.use(express.json());
app.use(cors());
app.use(
  "/",
  express.urlencoded({ extended: false }),
  [postsRouter],
  [usersRouter],
  [commentsRouter]
);

app.listen(port, () => {
  console.log("포트로 서버 ON!");
});

