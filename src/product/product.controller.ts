import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './product.schema';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  async createProduct(@Body() product: Partial<Product>): Promise<Product> {
    return this.productService.createProduct(product);
  }

  @Get(':id')
  async getProductById(@Param('id') id: string): Promise<Product | null> {
    return this.productService.findById(id);
  }

  @Get('name/:name')
  async getProductByName(@Param('name') name: string): Promise<Product | null> {
    return this.productService.findByName(name);
  }

  @Put(':id')
  async updateProduct(
    @Param('id') id: string,
    @Body() updates: Partial<Product>,
  ): Promise<Product | null> {
    return this.productService.updateProduct(id, updates);
  }

  @Delete(':id')
  async deleteProduct(@Param('id') id: string): Promise<Product | null> {
    return this.productService.deleteProduct(id);
  }

  @Get()
  async getAllProducts(): Promise<Product[]> {
    return this.productService.findAll();
  }
}
