import mongoose from 'mongoose';

// Define the Category collection
const categorySchema = new mongoose.Schema({
  name: { type: String, unique: true, required: true },
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
});

export const Category = mongoose.model('Category', categorySchema);
