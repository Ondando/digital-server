import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Order } from '../order/order.schema';
import { Product } from '../product/product.schema';

@Schema()
export class OrderItem extends Document {
  @Prop({ type: Types.ObjectId, ref: 'Order', required: true })
  order: Order;

  @Prop({ type: Types.ObjectId, ref: 'Product', required: true })
  product: Product;

  @Prop({ type: Number, required: true })
  quantity: number;

  @Prop({ type: Number, required: true })
  price: number;
}

export const OrderItemSchema = SchemaFactory.createForClass(OrderItem);
