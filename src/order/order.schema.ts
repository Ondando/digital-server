import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { User } from '../user/user.schema';
import { OrderItem } from '../order_item/order_item.schema';
import { Payment } from '../payment/payment.schema';

@Schema()
export class Order extends Document {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true })
  user: User;

  @Prop({
    type: String,
    enum: ['PENDING', 'PROCESSING', 'COMPLETED', 'CANCELED'],
    required: true,
  })
  status: string;

  @Prop({ type: Number, required: true })
  totalAmount: number;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'OrderItem' }] })
  orderItems: OrderItem[];

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Payment' })
  payment: Payment;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
