import Joi from 'joi';
import response from './response.helper';

const validation = (req, res, schema, next) => {
  const { error } = schema.validate(req.body, req.params, { abortEarly: false });
  if (error) {
    const errorMessages = [];
    error.details.forEach((detail) => {
      errorMessages.push(detail.message.split('"').join(''));
    });
    return response.errorMessage(
      res,
      errorMessages,
      400,
    );
  }
  return next();
};

export default class InputValidation {
  static validateSignup(req, res, next) {
    const schema = Joi.object({
      fullName: Joi.string().required(),
      email: Joi.string().email({ minDomainSegments: 2 }).message('email field should be a valid email address. e.g: johndoe@gmail.com.'),
      password: Joi.string().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*.,])(?=.{8,})/)
        .message('password field should contain at least 8 characters, at least 1 lowercase, 1 uppercase and 1 number and a special character.').required(),
      role: Joi.string()
    });
    validation(req, res, schema, next);
  }

  static validateLogin(req, res, next) {
    const schema = Joi.object({
      email: Joi.string().email({ minDomainSegments: 2 }).message('email field should be a valid email address. e.g: johndoe@gmail.com.'),
      password: Joi.string().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*.,])(?=.{8,})/)
        .message('password field should contain at least 8 characters, at least 1 lowercase, 1 uppercase and 1 number and a special character.').required()
    });
    validation(req, res, schema, next);
  }

  static validateTransaction(req, res, next) {
    const schema = Joi.object({
      fullName: Joi.string().required(),
      accountEmail: Joi.string().email({ minDomainSegments: 2 }).message('email field should be a valid email address. e.g: johndoe@gmail.com.'),
      amount: Joi.number()
    });
    validation(req, res, schema, next);
  }
}
