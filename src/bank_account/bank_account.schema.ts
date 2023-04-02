import mongoose from 'mongoose';

// Define the mongoose.Schema for the BankAccount type
const bankAccountSchema = new mongoose.Schema({
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
});
export const BankAccount = mongoose.model('BankAccount', bankAccountSchema);
