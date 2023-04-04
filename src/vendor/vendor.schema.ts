import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { User } from '../user/user.schema';
import { VendorProduct } from '../vendor_product/vendor_product.schema';
import { VendorBankAccount } from '../vendor_bank_account/vendor_bank_account.schema';

export type VendorDocument = Vendor & Document;

@Schema()
export class Vendor extends Document {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true })
  user: User;

  @Prop({ unique: true, required: true })
  vendorName: string;

  @Prop()
  contactEmail: string;

  @Prop()
  phoneNumber: string;

  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'VendorProduct' }],
  })
  vendorProducts: VendorProduct[];

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'VendorBankAccount' })
  vendorBankAccount: VendorBankAccount;

  @Prop({ required: true })
  balance: number;
}

export const VendorSchema = SchemaFactory.createForClass(Vendor);
