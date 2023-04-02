import { Module } from '@nestjs/common';
import { VendorProductService } from './vendor_product.service';
import { VendorProductController } from './vendor_product.controller';

@Module({
  providers: [VendorProductService],
  controllers: [VendorProductController]
})
export class VendorProductModule {}
