import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

@Schema()
export class Product extends Document {
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ProductType',
    required: true,
  })
  productType: mongoose.Schema.Types.ObjectId;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true,
  })
  category: mongoose.Schema.Types.ObjectId;

  @Prop({ unique: true, required: true })
  name: string;

  @Prop({ required: true })
  shortDescription: string;

  @Prop({ required: true })
  longDescription: string;

  @Prop([
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'VendorProduct',
    },
  ])
  vendorProducts: mongoose.Schema.Types.ObjectId[];

  @Prop([String])
  assets: string[];
}

export const ProductSchema = SchemaFactory.createForClass(Product);
