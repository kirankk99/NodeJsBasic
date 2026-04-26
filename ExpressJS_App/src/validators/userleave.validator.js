const Joi = require("joi");

const createUserleaveSchema = Joi.object({
  userId: Joi.string().min(5).required(),
  name: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
  startDate: Joi.date().valid().required(),
  endDate: Joi.date().valid().required(),
  type: Joi.string().min(3).required(),
  numOfDays: Joi.number(),
});

module.exports = { createUserleaveSchema };
