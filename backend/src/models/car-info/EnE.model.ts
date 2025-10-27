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
  tableName: 'car-E&E',
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
  FuelType: string;

  @Column({ type: DataType.STRING, allowNull: false })
  FuelAverage: string;

  @Column({ type: DataType.STRING, allowNull: false })
  FuelTankCapacity: string;

  @Column({ type: DataType.STRING, allowNull: false })
  FuelRange: string;
}
