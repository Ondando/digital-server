import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { VendorBankAccount } from './vendor_bank_account.schema';

@Injectable()
export class VendorBankAccountService {
  constructor(
    @InjectModel(VendorBankAccount.name)
    private readonly vendorBankAccountModel: Model<VendorBankAccount>,
  ) {}

  async findAll(): Promise<VendorBankAccount[]> {
    return this.vendorBankAccountModel.find().exec();
  }

  async create(
    createVendorBankAccountDto: Partial<VendorBankAccount>,
  ): Promise<VendorBankAccount> {
    const createdVendorBankAccount = new this.vendorBankAccountModel(
      createVendorBankAccountDto,
    );
    return createdVendorBankAccount.save();
  }
}
