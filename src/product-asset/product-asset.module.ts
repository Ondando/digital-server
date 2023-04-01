import { Module } from '@nestjs/common';
import { ProductAssetService } from './product-asset.service';
import { ProductAssetController } from './product-asset.controller';

@Module({
  providers: [ProductAssetService],
  controllers: [ProductAssetController]
})
export class ProductAssetModule {}
