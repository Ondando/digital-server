import { Module } from '@nestjs/common';
import { PayoutService } from './payout.service';
import { PayoutController } from './payout.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Payout, PayoutSchema } from './payout.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Payout.name, schema: PayoutSchema }]),
  ],
  providers: [PayoutService],
  controllers: [PayoutController],
})
export class PayoutModule {}
