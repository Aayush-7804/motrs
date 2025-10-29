import { Controller, Get, Param, Post } from '@nestjs/common';
import { CarDetailsService } from './car-details.service';

@Controller('car-details')
export class CarDetailsController {
  constructor(private readonly carDetailsService: CarDetailsService) {}

  @Get()
  async getCarDetails() {
    return await this.carDetailsService.getAllCarDetails();
  }

  @Get('/:id')
  async getCarDetailsById(@Param('id') id: string) {
    return await this.carDetailsService.getCarDetails(id);
  }

  @Get('/:id/similar')
  async getSimilarCarDetails(@Param('id') id: string) {
    return await this.carDetailsService.getSimilarCars(id);
  }

  @Post()
  async createCarDetail() {
    return await this.carDetailsService.createCarDetail();
  }
}
