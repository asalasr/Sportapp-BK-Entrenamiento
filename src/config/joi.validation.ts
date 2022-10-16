import * as Joi from 'joi';

export const JoiValidationSchema = Joi.object({
  DB_PASSWORD: Joi.optional(),
  DB_NAME: Joi.required(),
  DB_HOST: Joi.required(),
  DB_PORT: Joi.number().default(5432),
  DB_USERNAME: Joi.required(),
  DEFAULT_LIMIT: Joi.number().default(6),
  PORT: Joi.number().default(3000),
  NODE_ENV: Joi.string().default('dev'),
});
