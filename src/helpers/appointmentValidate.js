const Joi = require("joi");
const appointmentValidate = (data) => {
  const schema = Joi.object({
    date: Joi.date().required(),
    time: Joi.string().required(),
    department: Joi.string().required(),
    doctor: Joi.string().required(),
    name: Joi.string().required(),
    phone: Joi.string().required(),
    email: Joi.string().min(6).required().email().required(),
    message: Joi.string(),
  });
  return schema.validate(data);
};

module.exports = appointmentValidate;
