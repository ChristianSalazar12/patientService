const { Router } = require("express");
const {
  getAllPatient,
  getPatientById,
  createPatient,
  updatePatient,
  deletePatient,
} = require("../controllers/patientController");
const routerPatient = Router();

routerPatient.get("/wel", (req, res) => {
  res.send("Welcome to the patients API");
});

routerPatient.get("/patients", getAllPatient);
routerPatient.get("/patients/:id", getPatientById);
routerPatient.post("/patients/add", createPatient);
routerPatient.put("/patients/:id", updatePatient);
routerPatient.delete("/patients/delete/:id", deletePatient);

module.exports = routerPatient;
