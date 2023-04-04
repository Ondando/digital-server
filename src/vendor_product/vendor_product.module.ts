import { Module } from '@nestjs/common';
import { VendorProductService } from './vendor_product.service';
import { VendorProductController } from './vendor_product.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { VendorProduct } from 'src/models/model';
import { VendorProductSchema } from './vendor_product.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: VendorProduct.name, schema: VendorProductSchema },
    ]),
  ],
  providers: [VendorProductService],
  controllers: [VendorProductController],
})
export class VendorProductModule {}
