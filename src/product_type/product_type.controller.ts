import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { ProductTypeService } from './product_type.service';
import { ProductType } from './product_type.schema';

@Controller('product-type')
export class ProductTypeController {
  constructor(private readonly productTypeService: ProductTypeService) {}

  @Post()
  async createProductType(
    @Body() productType: Partial<ProductType>,
  ): Promise<ProductType> {
    return this.productTypeService.createProductType(productType);
  }

  @Get(':id')
  async getProductTypeById(
    @Param('id') id: string,
  ): Promise<ProductType | null> {
    return this.productTypeService.findById(id);
  }

  @Get('name/:name')
  async getProductTypeByName(
    @Param('name') name: string,
  ): Promise<ProductType | null> {
    return this.productTypeService.findByName(name);
  }

  @Put(':id')
  async updateProductType(
    @Param('id') id: string,
    @Body() updates: Partial<ProductType>,
  ): Promise<ProductType | null> {
    return this.productTypeService.updateProductType(id, updates);
  }

  @Delete(':id')
  async deleteProductType(
    @Param('id') id: string,
  ): Promise<ProductType | null> {
    return this.productTypeService.deleteProductType(id);
  }

  @Get()
  async getAllProductTypes(): Promise<ProductType[]> {
    return this.productTypeService.findAll();
  }
}
