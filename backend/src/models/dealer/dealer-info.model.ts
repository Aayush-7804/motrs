import {
  Column,
  DataType,
  HasMany,
  HasOne,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { DealerLocation } from './dealer-location.model';
import { CarInfo } from '../car-info/car-info.model';

@Table
export class DealerInfo extends Model<DealerInfo> {
  @PrimaryKey
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    allowNull: false,
  })
  id: string = '';

  @Column({ type: DataType.STRING, allowNull: false })
  dealer: string;

  @Column({ type: DataType.STRING, allowNull: false })
  contact: string;

  @Column({ type: DataType.STRING, allowNull: false })
  email: string;

  @Column({
    type: DataType.ARRAY(DataType.STRING),
    allowNull: false,
  })
  schedule: string[][];

  @HasOne(() => DealerLocation)
  location: DealerLocation;

  @HasMany(() => CarInfo)
  car: CarInfo[];
}
