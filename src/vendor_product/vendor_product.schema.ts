import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Vendor } from '../vendor/vendor.schema';
import { Product } from '../product/product.schema';

@Schema()
export class VendorProduct extends Document {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Vendor', required: true })
  vendor: Vendor;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true,
  })
  product: Product;

  @Prop({ required: true })
  digitalKey: string;

  @Prop({ required: true })
  price: number;
}

export const VendorProductSchema = SchemaFactory.createForClass(VendorProduct);
