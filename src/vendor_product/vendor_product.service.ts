import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { VendorProduct } from './vendor_product.schema';

@Injectable()
export class VendorProductService {
  constructor(
    @InjectModel(VendorProduct.name)
    private readonly vendorProductModel: Model<VendorProduct>,
  ) {}

  async findAll(): Promise<VendorProduct[]> {
    return this.vendorProductModel.find().exec();
  }

  async create(
    createVendorProductDto: Partial<VendorProduct>,
  ): Promise<VendorProduct> {
    const createdVendorProduct = new this.vendorProductModel(
      createVendorProductDto,
    );
    return createdVendorProduct.save();
  }
}
