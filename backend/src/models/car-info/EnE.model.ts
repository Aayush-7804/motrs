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
  tableName: 'car_E&E',
})
export class EnE extends Model<EnE> {
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
  'Fuel Type': string;

  @Column({ type: DataType.STRING, allowNull: false })
  'Fuel Average (per 100 km)': string;

  @Column({ type: DataType.STRING, allowNull: false })
  'Fuel Tank Capacity (L)': string;

  @Column({ type: DataType.STRING, allowNull: false })
  'Fuel Range (km)': string;
}
