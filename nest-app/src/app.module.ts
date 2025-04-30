import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb://root:example@localhost:27017/LifesCos?authSource=admin'), ProductsModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
