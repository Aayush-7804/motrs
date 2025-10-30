import { Module } from '@nestjs/common';
import { CarDetailsController } from './car-details.controller';
import { CarDetailsService } from './car-details.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { CarInfo } from 'src/models/car-info/car-info.model';
import { Body } from 'src/models/car-info/body.model';
import { EnD } from 'src/models/car-info/EnD.model';
import { EnE } from 'src/models/car-info/EnE.model';
import { Features } from 'src/models/car-info/features.model';
import { Overview } from 'src/models/car-info/overview.model';
import { CarDealersModule } from 'src/car-dealers/car-dealers.module';

@Module({
  imports: [
    SequelizeModule.forFeature([CarInfo, Overview, Body, EnD, EnE, Features]),
    CarDealersModule,
  ],
  controllers: [CarDetailsController],
  providers: [CarDetailsService],
})
export class CarDetailsModule {}
