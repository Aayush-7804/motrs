import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Optional } from 'sequelize';
import { NullishPropertiesOf } from 'sequelize/lib/utils';
import { DealBody } from 'src/DTOs/deal-body.dto';
import { CarInfo } from 'src/models/car-info/car-info.model';
import { Deal } from 'src/models/deal/deal';

@Injectable()
export class DealService {
  constructor(
    @InjectModel(Deal)
    private readonly dealModel: typeof Deal,
    @InjectModel(CarInfo)
    private readonly carModel: typeof CarInfo,
  ) {}

  async createDeal(id: string, body: DealBody) {
    const { name, lastName, email, message, mobileNumber } = body;
    const car = await this.carModel.findByPk(id, { include: [Deal] });
    const data = { carId: id, name, lastName, email, message, mobileNumber };

    if (!car) {
      throw new NotFoundException('car is not in the data.');
    }
    return await this.dealModel.create(
      data as Optional<Deal, NullishPropertiesOf<Deal>>,
    );
  }
}
