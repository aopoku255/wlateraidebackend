const appointmentValidate = require("../helpers/appointmentValidate");
const Appointment = require("../schema/Appointment");

// FETCH ALL APPOINTMENT
async function fetchAllAppointment(req, res) {
  const results = await Appointment.find();
  return { data: results };
}

// CREATE APPOINTMENT
async function appointmentController(req, res) {
  const { phone, email } = req.body;
  const appointmentExist = await Appointment.findOne({ phone, email });
  const { error } = appointmentValidate(req.body);
  if (error) {
    return { status: "error", error: error?.details[0]?.message };
  }
  if (appointmentExist) {
    return {
      status: "error",
      error: "You have already booked for an appointment",
    };
  }
  const results = await Appointment.create({ ...req.body });
  return { data: results, status: "success" };
}

// DELETE APPOINTMENT
async function deleteAppointment(req, res) {
  const { appointment_id } = req.body;
  const results = await Appointment.deleteOne({ _id: appointment_id });
  return { data: results, status: "success" };
}

module.exports = {
  fetchAllAppointment,
  appointmentController,
  deleteAppointment,
};
