const Joi = require("joi");

const createUserSchema = Joi.object({
  name: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
  // age: Joi.number().min(1).required(),
});

module.exports = { createUserSchema };
