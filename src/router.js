const router = require("express").Router();

router.use("/", require("./controller/appointments.controller"));

module.exports = router;
