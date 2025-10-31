import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Req,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { CarDetailsService } from './car-details.service';
import { FilesInterceptor } from '@nestjs/platform-express';
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
  @UseInterceptors(FilesInterceptor('image'))
  createCarDetail(
    @Param('id') id: string,
    @Req() req: Request,
    @Body() body: DetailsBody,
    @UploadedFiles() files: Express.Multer.File[],
  ) {
    return this.carDetailsService.createCarDetail(body, id, files);
  }
}
