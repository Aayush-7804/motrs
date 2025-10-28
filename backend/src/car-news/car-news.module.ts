import { Module } from '@nestjs/common';
import { CarNewsController } from './car-news.controller';
import { CarNewsService } from './car-news.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { NewsInfo } from 'src/models/news/news-info.model';

@Module({
  imports: [SequelizeModule.forFeature([NewsInfo])],
  controllers: [CarNewsController],
  providers: [CarNewsService],
})
export class CarNewsModule {}
