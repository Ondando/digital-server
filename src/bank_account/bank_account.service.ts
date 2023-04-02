import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BankAccount } from './bank_account.schema';

@Injectable()
export class BankAccountService {
  constructor(
    @InjectModel(BankAccount.name) private bankAccountModel: Model<BankAccount>,
  ) {}

  async findAll(): Promise<BankAccount[]> {
    return this.bankAccountModel.find().exec();
  }

  async create(bankAccountDto: BankAccount): Promise<BankAccount> {
    const createdBankAccount = new this.bankAccountModel(bankAccountDto);
    return createdBankAccount.save();
  }
}
