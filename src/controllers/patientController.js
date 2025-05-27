const {
  getAllPatientsService,
  getPatientByIdService,
  createPatientService,
  updatePatientService,
  deletePatientService,
} = require("../services/patientService");

const getAllPatient = async (req, res) => {
  try {
    const patients = await getAllPatientsService();
    res.status(200).json(patients);
  } catch (error) {
    console.error("Error fetching patients:", error);
    res.status(500).json({ message: "Could not fetch patients" });
  }
};
const getPatientById = async (req, res) => {
  const { id } = req.params;
  try {
    const patient = await getPatientByIdService(id);
    res.status(200).json(patient);
  } catch (error) {
    console.error("Error fetching patient by ID:", error);
    res.status(404).json({ message: "Patient not found" });
  }
};
const createPatient = async (req, res) => {
  const patientData = req.body;
  try {
    const newPatient = await createPatientService(patientData);
    res.status(201).json(newPatient);
  } catch (error) {
    console.error("Error creating patient:", error);
    res.status(500).json({ message: "Could not create patient" });
  }
};
const updatePatient = async (req, res) => {
  const { id } = req.params;
  const patientData = req.body;
  try {
    const updatedPatient = await updatePatientService(id, patientData);
    res.status(200).json(updatedPatient);
  } catch (error) {
    console.error("Error updating patient:", error);
    res.status(500).json({ message: "Could not update patient" });
  }
};
const deletePatient = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedPatient = await deletePatientService(id);
    res.status(200).json(deletedPatient);
  } catch (error) {
    console.error("Error deleting patient:", error);
    res.status(500).json({ message: "Could not delete patient" });
  }
};
module.exports = {
  getAllPatient,
  getPatientById,
  createPatient,
  updatePatient,
  deletePatient,
};
