import { Controller, Get, Post, Body } from '@nestjs/common';
import { VendorBankAccount } from './vendor_bank_account.schema';
import { VendorBankAccountService } from './vendor_bank_account.service';

@Controller('vendor-bank-account')
export class VendorBankAccountController {
  constructor(
    private readonly vendorBankAccountService: VendorBankAccountService,
  ) {}

  @Get()
  async findAll(): Promise<VendorBankAccount[]> {
    return this.vendorBankAccountService.findAll();
  }

  @Post()
  async create(
    @Body() createVendorBankAccountDto: Partial<VendorBankAccount>,
  ): Promise<VendorBankAccount> {
    return this.vendorBankAccountService.create(createVendorBankAccountDto);
  }
}
