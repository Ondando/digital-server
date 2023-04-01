import { Module } from '@nestjs/common';
import { VendorBankAccountService } from './vendor-bank-account.service';
import { VendorBankAccountController } from './vendor-bank-account.controller';

@Module({
  providers: [VendorBankAccountService],
  controllers: [VendorBankAccountController]
})
export class VendorBankAccountModule {}
