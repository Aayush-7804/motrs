import { Body, Controller, Param, Post, UseInterceptors } from '@nestjs/common';
import { DealService } from './deal.service';
import { DealBody } from 'src/DTOs/deal-body.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('deal')
export class DealController {
  constructor(private readonly dealService: DealService) {}

  @Post('/:id')
  @UseInterceptors(FileInterceptor(''))
  async createDeal(@Param('id') id: string, @Body() body: DealBody) {
    return await this.dealService.createDeal(id, body);
  }
}
