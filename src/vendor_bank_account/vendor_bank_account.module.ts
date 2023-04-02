import { Module } from '@nestjs/common';
import { VendorBankAccountService } from './vendor_bank_account.service';
import { VendorBankAccountController } from './vendor_bank_account.controller';

@Module({
  providers: [VendorBankAccountService],
  controllers: [VendorBankAccountController],
})
export class VendorBankAccountModule {}
