import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { VendorBankAccountModule } from './vendor_bank_account/vendor_bank_account.module';
import { PayoutModule } from './payout/payout.module';
import { PaymentModule } from './payment/payment.module';
import { BankAccountModule } from './bank_account/bank_account.module';
import { OrderItemModule } from './order_item/order_item.module';
import { OrderModule } from './order/order.module';
import { VendorProductModule } from './vendor_product/vendor_product.module';
import { ProductModule } from './product/product.module';
import { ProductTypeModule } from './product_type/product_type.module';
import { CategoryModule } from './category/category.module';
import { VendorModule } from './vendor/vendor.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.DB_URI, {
      authSource: 'admin',
      auth: {
        username: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
      },
    }),
    UserModule,
    VendorModule,
    CategoryModule,
    ProductTypeModule,
    ProductModule,
    VendorProductModule,
    OrderModule,
    OrderItemModule,
    BankAccountModule,
    PaymentModule,
    PayoutModule,
    VendorBankAccountModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
