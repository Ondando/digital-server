import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class BankAccount extends Document {
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
}

export const BankAccountSchema = SchemaFactory.createForClass(BankAccount);
