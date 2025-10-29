import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { CarInfo } from './car-info.model';

@Table({
  tableName: 'car_overview',
})
export class Overview extends Model<Overview> {
  @PrimaryKey
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    allowNull: false,
  })
  id: string = '';

  @ForeignKey(() => CarInfo)
  @Column({ type: DataType.UUID, allowNull: false })
  carInfoId: string;

  @BelongsTo(() => CarInfo)
  carInfo: CarInfo;

  @Column({ type: DataType.STRING, allowNull: false })
  Milage: string;

  @Column({ type: DataType.STRING, allowNull: false })
  'Drive Type': string;

  @Column({ type: DataType.STRING, allowNull: false })
  Transmission: string;

  @Column({ type: DataType.STRING, allowNull: false })
  Fuel: string;

  @Column({ type: DataType.STRING, allowNull: false })
  Consumption: string;

  @Column({ type: DataType.STRING, allowNull: false })
  'Engine Cap': string;
}
