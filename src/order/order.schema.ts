import mongoose from 'mongoose';

// Define the mongoose.Schema for the Order type
const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  status: {
    type: String,
    enum: ['PENDING', 'PROCESSING', 'COMPLETED', 'CANCELED'],
    required: true,
  },
  totalAmount: {
    type: Number,
    required: true,
  },
  orderItems: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'OrderItem',
      required: true,
    },
  ],
  payment: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Payment',
  },
});

export const Order = mongoose.model('Order', orderSchema);
