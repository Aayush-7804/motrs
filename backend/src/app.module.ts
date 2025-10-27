import { Module } from '@nestjs/common';
import { CarDetailsModule } from './car-details/car-details.module';
import { SequelizeModule } from '@nestjs/sequelize';

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
    }),
  ],
})
export class AppModule {}
