const { Router } = require("express");
const patientRouter = require("./patient");
const router = Router();

router.use("/patient", patientRouter);

router.get("/", (req, res) => {
  res.send("Welcome to the API router");
});

module.exports = router;
