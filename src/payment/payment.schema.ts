import mongoose from 'mongoose';

// Define the mongoose.Schema for the Payment type
const paymentSchema = new mongoose.Schema({
  order: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Order',
    required: true,
  },
  bankAccount: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'BankAccount',
    required: true,
  },
  transactionId: {
    type: String,
    unique: true,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  paymentDate: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    enum: ['PENDING', 'COMPLETED', 'FAILED'],
    required: true,
  },
});

export const Payment = mongoose.model('Payment', paymentSchema);
