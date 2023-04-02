import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Order } from '../order/order.schema';
import { BankAccount } from '../bank_account/bank_account.schema';

export type PaymentDocument = Payment & Document;

@Schema()
export class Payment {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Order', required: true })
  order: Order;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'BankAccount',
    required: true,
  })
  bankAccount: BankAccount;

  @Prop({ unique: true, required: true })
  transactionId: string;

  @Prop({ required: true })
  amount: number;

  @Prop({ type: Date, required: true })
  paymentDate: Date;

  @Prop({ enum: ['PENDING', 'COMPLETED', 'FAILED'], required: true })
  status: string;
}

export const PaymentSchema = SchemaFactory.createForClass(Payment);
