const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getAllPatientsService = async () => {
  try {
    const patients = await prisma.pacientes.findMany();
    return patients;
  } catch (error) {
    console.error("Error fetching patients:", error);
    throw new Error("Could not fetch patients");
  }
};
const getPatientByIdService = async (id) => {
  try {
    const patient = await prisma.pacientes.findUnique({
      where: { id: Number(id) },
    });
    if (!patient) {
      throw new Error("Patient not found");
    }
    return patient;
  } catch (error) {
    console.error("Error fetching patient by ID:", error);
    throw new Error("Could not fetch patient by ID");
  }
};
const createPatientService = async (patientData) => {
  try {
    const newPatient = await prisma.pacientes.create({
      data: patientData,
    });
    return newPatient;
  } catch (error) {
    console.error("Error creating patient:", error);
    throw new Error("Could not create patient");
  }
};
const updatePatientService = async (id, patientData) => {
  try {
    const updatedPatient = await prisma.pacientes.update({
      where: { id: Number(id) },
      data: patientData,
    });
    return updatedPatient;
  } catch (error) {
    console.error("Error updating patient:", error);
    throw new Error("Could not update patient");
  }
};
const deletePatientService = async (id) => {
  try {
    const deletedPatient = await prisma.pacientes.delete({
      where: { id: Number(id) },
    });
    return deletedPatient;
  } catch (error) {
    console.error("Error deleting patient:", error);
    throw new Error("Could not delete patient");
  }
};
module.exports = {
  getAllPatientsService,
  getPatientByIdService,
  createPatientService,
  updatePatientService,
  deletePatientService,
};
