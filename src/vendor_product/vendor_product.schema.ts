import mongoose from 'mongoose';

const vendorProductSchema = new mongoose.Schema({
  vendor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Vendor',
    required: true,
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true,
  },
  digitalKey: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

export const VendorProduct = mongoose.model(
  'VendorProduct',
  vendorProductSchema,
);
