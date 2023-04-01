import mongoose from 'mongoose';

const { Schema } = mongoose;

const userRoleSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    role: {
      type: Schema.Types.ObjectId,
      ref: 'Role',
      required: true,
    },
  },
  { timestamps: true },
);

export default mongoose.model('UserRole', userRoleSchema);
