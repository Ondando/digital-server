import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Vendor } from '../vendor/vendor.schema';
import { Payout } from '../payout/payout.schema';

@Schema()
export class VendorBankAccount extends Document {
  @Prop({ type: Types.ObjectId, ref: Vendor.name, required: true })
  vendor: Vendor;

  @Prop({ required: true })
  accountHolderName: string;

  @Prop({ required: true })
  bankName: string;

  @Prop({ unique: true, required: true })
  accountNumber: string;

  @Prop()
  branchCode?: string;

  @Prop()
  swiftCode?: string;

  @Prop()
  iban?: string;

  @Prop({ type: [{ type: Types.ObjectId, ref: Payout.name }] })
  payouts?: Payout[];
}

export const VendorBankAccountSchema =
  SchemaFactory.createForClass(VendorBankAccount);
