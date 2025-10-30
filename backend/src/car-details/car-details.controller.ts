import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CarDetailsService } from './car-details.service';
import { DetailsBody } from 'src/DTOs/details-body.dto';

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

  @Post('/:id')
  async createCarDetail(@Body() body: DetailsBody, @Param('id') id: string) {
    return await this.carDetailsService.createCarDetail(body,id);
  }
}
