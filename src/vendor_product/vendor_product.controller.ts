import { Controller, Get, Post, Body } from '@nestjs/common';
import { VendorProduct } from './vendor_product.schema';
import { VendorProductService } from './vendor_product.service';

@Controller('vendor-product')
export class VendorProductController {
  constructor(private readonly vendorProductService: VendorProductService) {}

  @Get()
  async findAll(): Promise<VendorProduct[]> {
    return this.vendorProductService.findAll();
  }

  @Post()
  async create(
    @Body() createVendorProductDto: Partial<VendorProduct>,
  ): Promise<VendorProduct> {
    return this.vendorProductService.create(createVendorProductDto);
  }
}
