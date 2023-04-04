import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Payout } from './payout.schema';

@Injectable()
export class PayoutService {
  constructor(
    @InjectModel(Payout.name) private readonly payoutModel: Model<Payout>,
  ) {}

  async findAll(): Promise<Payout[]> {
    return this.payoutModel.find().exec();
  }

  async create(createPayoutDto: Partial<Payout>): Promise<Payout> {
    const createdPayout = new this.payoutModel(createPayoutDto);
    return createdPayout.save();
  }
}
