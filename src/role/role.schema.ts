import mongoose from 'mongoose';

// Define the Role collection
const roleSchema = new mongoose.Schema({
  roleName: { type: String, unique: true, required: true },
  users: [{ type: mongoose.Schema.Types.ObjectId, ref: 'UserRole' }],
});

export const Role = mongoose.model('Role', roleSchema);
