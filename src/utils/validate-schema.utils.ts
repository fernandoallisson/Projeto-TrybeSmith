import Joi, { ValidationResult } from 'joi';

type ValidateSchema = (
  schema: Joi.ObjectSchema<any>,
  data: Joi.ObjectSchema<any>
) => { message: string } | null;

const validateSchema: ValidateSchema = (
  schema: Joi.ObjectSchema<any>,
  data: Joi.ObjectSchema<any>,
): { message: string } | null => {
  const result: ValidationResult<any> = schema.validate(data);

  if (!result.error) return null;

  const { details } = result.error;
  const message = details.map((item) => item.message).join(', ');

  return { message };
};

export default validateSchema;
