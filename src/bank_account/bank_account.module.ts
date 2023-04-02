import { Module } from '@nestjs/common';
import { BankAccountService } from './bank_account.service';
import { BankAccountController } from './bank_account.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { BankAccount, BankAccountSchema } from './bank_account.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: BankAccount.name, schema: BankAccountSchema },
    ]),
  ],
  providers: [BankAccountService],
  controllers: [BankAccountController],
})
export class BankAccountModule {}
