import mongoose from 'mongoose';

// Define the User collection
const userSchema = new mongoose.Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  firstName: String,
  lastName: String,
  roles: [{ type: String, enum: ['user', 'admin', 'vendor'] }],
  vendor: { type: mongoose.Schema.Types.ObjectId, ref: 'Vendor' },
  orders: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Order' }],
});

export const User = mongoose.model('User', userSchema);
