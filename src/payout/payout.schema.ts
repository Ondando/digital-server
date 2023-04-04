import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Vendor } from '../vendor/vendor.schema';
import { VendorBankAccount } from '../vendor_bank_account/vendor_bank_account.schema';

@Schema()
export class Payout extends Document {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Vendor', required: true })
  vendor: Vendor;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'VendorBankAccount',
    required: true,
  })
  vendorBankAccount: VendorBankAccount;

  @Prop({ required: true })
  amount: number;

  @Prop({ required: true })
  paymentDate: Date;

  @Prop({
    type: String,
    enum: ['PENDING', 'COMPLETED', 'FAILED'],
    required: true,
  })
  status: string;
}

export const PayoutSchema = SchemaFactory.createForClass(Payout);
