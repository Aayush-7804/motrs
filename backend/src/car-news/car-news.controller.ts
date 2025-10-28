import { Controller, Get, Post } from '@nestjs/common';
import { CarNewsService } from './car-news.service';

@Controller('car-news')
export class CarNewsController {
  constructor(private readonly carNewsService: CarNewsService) {}

  @Get()
  getAllNews() {
    return this.carNewsService.NewsInfo();
  }

  @Post()
  createNews() {
    return this.carNewsService.createNews();
  }
}
