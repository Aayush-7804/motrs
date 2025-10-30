import { Module } from '@nestjs/common';
import { CarDetailsModule } from './car-details/car-details.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { CarNewsModule } from './car-news/car-news.module';
import { CarDealersModule } from './car-dealers/car-dealers.module';

@Module({
  imports: [
    CarDetailsModule,
    SequelizeModule.forRoot({
      host: 'localhost',
      port: 8002,
      dialect: 'postgres',
      username: 'postgres',
      password: 'aayush7804',
      database: 'motrsdb',
      models: [],
      autoLoadModels: true,
      synchronize: true,
      logging: false,
    }),
    CarNewsModule,
    CarDealersModule,
  ],
})
export class AppModule {}
