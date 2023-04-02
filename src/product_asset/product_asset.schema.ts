import mongoose from 'mongoose';

// Define the Product Asset collection
const productAssetSchema = new mongoose.Schema({
  name: { type: String, enum: ['IMAGE', 'VIDEO'], required: true },
});

export const ProductAsset = mongoose.model('ProductAsset', productAssetSchema);
