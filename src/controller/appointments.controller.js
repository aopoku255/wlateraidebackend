const appointmentValidate = require("../helpers/appointmentValidate");
const Appointment = require("../schema/Appointment");
const {
  appointmentController,
  fetchAllAppointment,
  deleteAppointment,
} = require("../service/appointment.service");

const router = require("express").Router();

// FETCH ALL APPOINTMENT
router.get("/", async (req, res) => {
  return res.json(await fetchAllAppointment(req, res));
});

// CREATE APPOINTMENT
router.post("/create", async (req, res) => {
  return res.json(await appointmentController(req, res));
});

// DELETE APPOINTMENT
router.delete("/delete", async (req, res) => {
  return res.json(await deleteAppointment(req, res));
});

module.exports = router;
