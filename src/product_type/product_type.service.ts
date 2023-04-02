import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProductType } from './product_type.schema';

@Injectable()
export class ProductTypeService {
  constructor(
    @InjectModel(ProductType.name)
    private productTypeModel: Model<ProductType>,
  ) {}

  async createProductType(
    productType: Partial<ProductType>,
  ): Promise<ProductType> {
    const newProductType = new this.productTypeModel(productType);
    return newProductType.save();
  }

  async findById(id: string): Promise<ProductType | null> {
    return this.productTypeModel.findById(id).populate('products').exec();
  }

  async findByName(name: string): Promise<ProductType | null> {
    return this.productTypeModel.findOne({ name }).populate('products').exec();
  }

  async updateProductType(
    id: string,
    updates: Partial<ProductType>,
  ): Promise<ProductType | null> {
    return this.productTypeModel
      .findByIdAndUpdate(id, updates, { new: true })
      .populate('products')
      .exec();
  }

  async deleteProductType(id: string): Promise<ProductType | null> {
    return this.productTypeModel
      .findByIdAndDelete(id)
      .populate('products')
      .exec();
  }

  async findAll(): Promise<ProductType[]> {
    return this.productTypeModel.find().populate('products').exec();
  }
}
