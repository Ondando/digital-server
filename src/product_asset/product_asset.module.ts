import { Module } from '@nestjs/common';
import { ProductAssetService } from './product_asset.service';
import { ProductAssetController } from './product_asset.controller';

@Module({
  providers: [ProductAssetService],
  controllers: [ProductAssetController]
})
export class ProductAssetModule {}
