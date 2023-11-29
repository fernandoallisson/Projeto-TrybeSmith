import Joi from 'joi';

const required = '"username" and "password" are required';

const loginSchema = Joi.object({
  username: Joi.string().min(3).required(),
  password: Joi.string().min(6).required(),
}).messages({
  'string.username': required,
  'string.empty': required,
  'any.required': required,
  'any.min': required,
});

export default loginSchema;
