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
  tableName: 'car_E&D',
})
export class EnD extends Model<EnD> {
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
  Engine: string;

  @Column({ type: DataType.STRING, allowNull: false })
  'Engine Position': string;

  @Column({ type: DataType.STRING, allowNull: false })
  Cylinders: string;

  @Column({ type: DataType.STRING, allowNull: false })
  'Power (kW)': string;

  @Column({ type: DataType.STRING, allowNull: false })
  'Torque (Nm)': string;

  @Column({ type: DataType.STRING, allowNull: false })
  Gearshift: string;

  @Column({ type: DataType.STRING, allowNull: false })
  'CO₂ Emissions (Average) g/km': string;

  @Column({ type: DataType.STRING, allowNull: false })
  'Acceleration 0-100 km/h': string;

  @Column({ type: DataType.STRING, allowNull: false })
  'Maximum/Top Speed km/h': string;
}
