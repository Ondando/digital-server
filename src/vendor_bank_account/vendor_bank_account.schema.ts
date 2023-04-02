import mongoose from 'mongoose';

const vendorBankAccountSchema = new mongoose.Schema({
  vendor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Vendor',
    required: true,
  },
  accountHolderName: {
    type: String,
    required: true,
  },
  bankName: {
    type: String,
    required: true,
  },
  accountNumber: {
    type: String,
    unique: true,
    required: true,
  },
  branchCode: {
    type: String,
  },
  swiftCode: {
    type: String,
  },
  iban: {
    type: String,
  },
  payouts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Payout',
    },
  ],
});

export const VendorBankAccount = mongoose.model(
  'VendorBankAccount',
  vendorBankAccountSchema,
);
