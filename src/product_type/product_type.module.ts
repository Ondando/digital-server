import { Module } from '@nestjs/common';
import { ProductTypeService } from './product_type.service';
import { ProductTypeController } from './product_type.controller';

@Module({
  providers: [ProductTypeService],
  controllers: [ProductTypeController],
})
export class ProductTypeModule {}
