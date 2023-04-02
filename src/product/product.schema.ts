import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  productType: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ProductType',
    required: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true,
  },
  name: { type: String, unique: true, required: true },
  shortDescription: { type: String, required: true },
  longDescription: { type: String, required: true },
  vendorProducts: [
    { type: mongoose.Schema.Types.ObjectId, ref: 'VendorProduct' },
  ],
  assets: [{ type: mongoose.Schema.Types.ObjectId, ref: 'ProductAsset' }],
});

export const Product = mongoose.model('Product', productSchema);
