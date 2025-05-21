const { Router } = require("express");
const routerPatient = Router();

routerPatient.get("/wel", (req, res) => {
  res.send("Welcome to the patients API");
});

module.exports = routerPatient;
