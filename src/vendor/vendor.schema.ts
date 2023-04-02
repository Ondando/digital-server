import mongoose from 'mongoose';

const vendorSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  vendorName: { type: String, unique: true, required: true },
  contactEmail: String,
  phoneNumber: String,
  vendorProducts: [
    { type: mongoose.Schema.Types.ObjectId, ref: 'VendorProduct' },
  ],
  vendorBankAccount: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'VendorBankAccount',
  },
  balance: { type: Number, required: true },
});

export const Vendor = mongoose.model('Vendor', vendorSchema);
