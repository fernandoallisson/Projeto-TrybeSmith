import Joi from 'joi';

const productSchema = Joi.object({
  name: Joi.string().min(2).required(),
  price: Joi.string().min(3).required(),
  orderId: Joi.number(),
}).messages({
  'name.empty': '"name" is required',
  'name.string': '"name" must be a string',
  'name.min': '"name" length must be at least 3 characters long',
  'price.empty': '"price" is required',
  'price.string': '"price" must be a string',
  'price.min': '"price" length must be at least 3 characters long',
  'orderId.empty': '"orderId" is required',
  'orderId.number': '"orderId" must be a number',
});

export default productSchema;