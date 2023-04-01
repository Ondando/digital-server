import { Module } from '@nestjs/common';
import { VendorProductService } from './vendor-product.service';
import { VendorProductController } from './vendor-product.controller';

@Module({
  providers: [VendorProductService],
  controllers: [VendorProductController]
})
export class VendorProductModule {}
