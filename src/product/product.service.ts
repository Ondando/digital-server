import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from './product.schema';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<Product>,
  ) {}

  async createProduct(product: Partial<Product>): Promise<Product> {
    const newProduct = new this.productModel(product);
    return newProduct.save();
  }

  async findById(id: string): Promise<Product | null> {
    return this.productModel
      .findById(id)
      .populate('productType')
      .populate('category')
      .exec();
  }

  async findByName(name: string): Promise<Product | null> {
    return this.productModel
      .findOne({ name })
      .populate('productType')
      .populate('category')
      .exec();
  }

  async updateProduct(
    id: string,
    updates: Partial<Product>,
  ): Promise<Product | null> {
    return this.productModel
      .findByIdAndUpdate(id, updates, { new: true })
      .populate('productType')
      .populate('category')
      .exec();
  }

  async deleteProduct(id: string): Promise<Product | null> {
    return this.productModel
      .findByIdAndDelete(id)
      .populate('productType')
      .populate('category')
      .exec();
  }
  async findAll(): Promise<Product[]> {
    return this.productModel
      .find()
      .populate('productType')
      .populate('category')
      .exec();
  }
}
