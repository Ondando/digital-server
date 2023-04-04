import { Module } from '@nestjs/common';
import { VendorBankAccountService } from './vendor_bank_account.service';
import { VendorBankAccountController } from './vendor_bank_account.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  VendorBankAccount,
  VendorBankAccountSchema,
} from './vendor_bank_account.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: VendorBankAccount.name, schema: VendorBankAccountSchema },
    ]),
  ],
  providers: [VendorBankAccountService],
  controllers: [VendorBankAccountController],
})
export class VendorBankAccountModule {}
