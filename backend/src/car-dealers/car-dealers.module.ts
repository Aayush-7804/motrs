import { Module } from '@nestjs/common';
import { CarDealersController } from './car-dealers.controller';
import { CarDealersService } from './car-dealers.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { DealerInfo } from 'src/models/dealer/dealer-info.model';
import { DealerLocation } from 'src/models/dealer/dealer-location.model';

@Module({
  imports: [SequelizeModule.forFeature([DealerInfo, DealerLocation])],
  controllers: [CarDealersController],
  providers: [CarDealersService],
  exports: [SequelizeModule],
})
export class CarDealersModule {}
