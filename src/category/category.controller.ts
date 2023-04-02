import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { CategoryService } from './category.service';
import { Category } from './category.schema';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  async createCategory(@Body() category: Partial<Category>): Promise<Category> {
    return this.categoryService.createCategory(category);
  }

  @Get(':id')
  async getCategoryById(@Param('id') id: string): Promise<Category | null> {
    return this.categoryService.findById(id);
  }

  @Get('name/:name')
  async getCategoryByName(
    @Param('name') name: string,
  ): Promise<Category | null> {
    return this.categoryService.findByName(name);
  }

  @Put(':id')
  async updateCategory(
    @Param('id') id: string,
    @Body() updates: Partial<Category>,
  ): Promise<Category | null> {
    return this.categoryService.updateCategory(id, updates);
  }

  @Delete(':id')
  async deleteCategory(@Param('id') id: string): Promise<Category | null> {
    return this.categoryService.deleteCategory(id);
  }

  @Get()
  async getAllCategories(): Promise<Category[]> {
    return this.categoryService.findAll();
  }
}
