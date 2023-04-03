import mongoose from 'mongoose';

const transactionSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true
    },
    accountEmail: {
      type: String,
      required: true
    },
    amount: {
      type: Number,
      required: true
    },
  },
  { timestamps: true }
);

const Transaction = mongoose.model('Transaction', transactionSchema);
export default Transaction;
