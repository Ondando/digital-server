import { Controller, Get, Post, Body } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BankAccount } from './bank_account.schema';

@Controller('bank-accounts')
export class BankAccountController {
  constructor(
    @InjectModel(BankAccount.name) private bankAccountModel: Model<BankAccount>,
  ) {}

  @Get()
  async findAll(): Promise<BankAccount[]> {
    return this.bankAccountModel.find().exec();
  }

  @Post()
  async create(@Body() bankAccountDto: BankAccount): Promise<BankAccount> {
    const createdBankAccount = new this.bankAccountModel(bankAccountDto);
    return createdBankAccount.save();
  }
}
