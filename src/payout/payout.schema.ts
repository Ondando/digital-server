import mongoose from 'mongoose';

// Define the mongoose.Schema for the Payout type
const payoutSchema = new mongoose.Schema({
  vendor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Vendor',
    required: true,
  },
  vendorBankAccount: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'VendorBankAccount',
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
const Payout = mongoose.model('Payout', payoutSchema);
