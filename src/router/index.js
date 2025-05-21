const { Router } = require("express");
const patientRouter = require("./patient");
const router = Router();

router.use("/patients", patientRouter);

module.exports = router;
