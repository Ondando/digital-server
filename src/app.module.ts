import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { RoleModule } from './role/role.module';
import { UserRoleModule } from './user-role/user-role.module';
import { VendorModule } from './vendor/vendor.module';
import { CategoryModule } from './category/category.module';
import { ProductTypeModule } from './product-type/product-type.module';
import { ProductModule } from './product/product.module';
import { VendorProductModule } from './vendor-product/vendor-product.module';
import { OrderModule } from './order/order.module';
import { OrderItemModule } from './order-item/order-item.module';
import { BankAccountModule } from './bank-account/bank-account.module';
import { PaymentModule } from './payment/payment.module';
import { PayoutModule } from './payout/payout.module';
import { VendorBankAccountModule } from './vendor-bank-account/vendor-bank-account.module';
import { ProductAssetModule } from './product-asset/product-asset.module';

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
    RoleModule,
    UserRoleModule,
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
    ProductAssetModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
