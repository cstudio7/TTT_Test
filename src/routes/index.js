import express from 'express';
import userRoute from './users/user.route';
import transactionRoute from './transaction/transaction.routes';

const Router = express.Router();
Router.use('/api/v1/auth', userRoute);
Router.use('/api/v1', transactionRoute);

export default Router;
