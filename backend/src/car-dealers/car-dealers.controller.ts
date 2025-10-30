import { Controller, Get, Param, Post } from '@nestjs/common';
import { CarDealersService } from './car-dealers.service';

@Controller('car-dealers')
export class CarDealersController {
  constructor(private readonly carDealersService: CarDealersService) {}

  @Get()
  async getDealers() {
    return await this.carDealersService.allDealers();
  }

  @Get('/:id')
  async getDealer(@Param('id') id: string) {
    return await this.carDealersService.getDealer(id);
  }

  @Post()
  async newDealer() {
    return await this.carDealersService.createDealer();
  }
}
