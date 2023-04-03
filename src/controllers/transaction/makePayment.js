import Transaction from '../../models/transcation';
import AuthServices from '../../services/user/auth.services';
// const stripe = require('stripe')(process.env.STRIPE_SECRET_TEST);

export const makePayment = async (req, res) => {
  try {
    // Connect with your Stripe Credential to make this work

    // await stripe.paymentIntents.create({
    //   amount,
    //   currency: 'USD',
    //   description: 'TTT Load repayment',
    //   payment_method: id,
    //   confirm: true,
    // });

    const user = await AuthServices.emailExist(req.email, res);

    const newTransaction = {
      ...req.body,
      userId: user._id
    };

    await Transaction.create(newTransaction);
    return res.status(200).json({
      status: 'success',
      data: {
        success: true,
        message: 'Payment successful'
      },
    });
  } catch (error) {
    return res.status(500).json({
      status: '500 Internal server error',
      error: 'Payment failed'
    });
  }
};
