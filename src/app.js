const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const router = require("./router/index");
const loggerMiddlewares = require("./middlewares/logger");
const errorHandler = require("./middlewares/erroHandler");

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(loggerMiddlewares);
app.use(errorHandler);

app.get("/", (req, res) => {
  res.send("Welcome to the API");
});

app.use("/api", router);

module.exports = app;
