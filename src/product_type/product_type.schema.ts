import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Product } from '../product/product.schema';

export type ProductTypeDocument = ProductType & Document;

@Schema()
export class ProductType {
  @Prop({ required: true, unique: true })
  name: string;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Product' }] })
  products: Product[];
}

export const ProductTypeSchema = SchemaFactory.createForClass(ProductType);
