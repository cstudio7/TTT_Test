import express from 'express';
import userController from '../../controllers/users/user.controller';
import InputValidation from '../../helpers/joi.validate';

const router = express.Router();

const { validateSignup, validateLogin } = InputValidation;

router.post('/signup', validateSignup, userController.signUp);
router.post('/signin', validateLogin, userController.login);
router.post('/logout', validateLogin, userController.login);

export default router;
