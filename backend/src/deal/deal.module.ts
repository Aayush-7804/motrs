import { Module } from '@nestjs/common';
import { DealController } from './deal.controller';
import { DealService } from './deal.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Deal } from 'src/models/deal/deal';
import { CarDetailsModule } from 'src/car-details/car-details.module';

@Module({
  imports: [SequelizeModule.forFeature([Deal]), CarDetailsModule],
  controllers: [DealController],
  providers: [DealService],
})
export class DealModule {}
