import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Category } from './category.schema';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(Category.name) private categoryModel: Model<Category>,
  ) {}

  async createCategory(category: Partial<Category>): Promise<Category> {
    const newCategory = new this.categoryModel(category);
    return newCategory.save();
  }

  async findById(id: string): Promise<Category | null> {
    return this.categoryModel.findById(id).populate('products').exec();
  }

  async findByName(name: string): Promise<Category | null> {
    return this.categoryModel.findOne({ name }).populate('products').exec();
  }

  async updateCategory(
    id: string,
    updates: Partial<Category>,
  ): Promise<Category | null> {
    return this.categoryModel
      .findByIdAndUpdate(id, updates, { new: true })
      .populate('products')
      .exec();
  }

  async deleteCategory(id: string): Promise<Category | null> {
    return this.categoryModel.findByIdAndDelete(id).populate('products').exec();
  }

  async findAll(): Promise<Category[]> {
    return this.categoryModel.find().populate('products').exec();
  }
}
