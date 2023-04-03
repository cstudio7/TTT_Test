import express from 'express';
import createAccountLimiter from '../../middlewares/rateLimiter.middleware';
import { makePayment } from '../../controllers/transaction/makePayment';
import authMiddleware from '../../middlewares/auth.middleware';
import InputValidation from '../../helpers/joi.validate';

const TransactionRouter = express.Router();
const { validateTransaction } = InputValidation;

TransactionRouter.post('/transaction', authMiddleware, validateTransaction, createAccountLimiter, makePayment);

export default TransactionRouter;
