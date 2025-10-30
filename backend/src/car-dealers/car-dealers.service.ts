import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Optional } from 'sequelize';
import { NullishPropertiesOf } from 'sequelize/lib/utils';
import { CarInfo } from 'src/models/car-info/car-info.model';
import { DealerInfo } from 'src/models/dealer/dealer-info.model';
import { DealerLocation } from 'src/models/dealer/dealer-location.model';

@Injectable()
export class CarDealersService {
  constructor(
    @InjectModel(DealerInfo)
    private readonly dealerModel: typeof DealerInfo,
  ) {}

  async allDealers() {
    const dealers = await this.dealerModel.findAll({
      include: [DealerLocation, CarInfo],
    });
    return dealers;
  }

  async getDealer(id: string) {
    const dealer = this.dealerModel.findByPk(id, {
      include: [DealerLocation, CarInfo],
    });

    return dealer;
  }

  async createDealer() {
    const dealer = await this.dealerModel.create(
      {
        dealer: 'fadf',
        contact: 'agd',
        email: 'adfsaf',
        schedule: [
          ['9', '22'],
          ['9', '22'],
          ['9', '22'],
          ['9', '22'],
          ['9', '22'],
          ['9', '12'],
          ['close', 'close'],
        ],
        location: {
          streets: 'afgdad',
          state: 'ad',
          city: 'fgda',
          PIN: 3541,
          country: 'gsgdf',
        },
      } as Optional<DealerInfo, NullishPropertiesOf<DealerInfo>>,
      { include: [DealerLocation, CarInfo] },
    );
    return dealer;
  }
}
