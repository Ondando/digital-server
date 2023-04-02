import mongoose from 'mongoose';

// Define the ProductType collection
const productTypeSchema = new mongoose.Schema({
  name: { type: String, unique: true, required: true },
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
});

export const ProductType = mongoose.model('ProductType', productTypeSchema);
