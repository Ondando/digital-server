import { Module } from '@nestjs/common';
import { OrderItemService } from './order_item.service';
import { OrderItemController } from './order_item.controller';

@Module({
  providers: [OrderItemService],
  controllers: [OrderItemController]
})
export class OrderItemModule {}
