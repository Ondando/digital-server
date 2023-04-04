import { Controller, Get, Post, Body } from '@nestjs/common';
import { Payout } from './payout.schema';
import { PayoutService } from './payout.service';

@Controller('payout')
export class PayoutController {
  constructor(private readonly payoutService: PayoutService) {}

  @Get()
  async findAll(): Promise<Payout[]> {
    return this.payoutService.findAll();
  }

  @Post()
  async create(@Body() createPayoutDto: Partial<Payout>): Promise<Payout> {
    return this.payoutService.create(createPayoutDto);
  }
}
