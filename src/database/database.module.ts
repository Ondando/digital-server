import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DatabaseConnection } from './database.service';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/mydatabase')],
  providers: [DatabaseConnection],
  exports: [MongooseModule, DatabaseConnection],
})
export class DatabaseModule {}
