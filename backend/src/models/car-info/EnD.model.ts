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
  tableName: 'car-E&D',
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
  EnginePosition: string;

  @Column({ type: DataType.STRING, allowNull: false })
  Cylinders: string;

  @Column({ type: DataType.STRING, allowNull: false })
  Power: string;

  @Column({ type: DataType.STRING, allowNull: false })
  Torque: string;

  @Column({ type: DataType.STRING, allowNull: false })
  Gearshift: string;

  @Column({ type: DataType.STRING, allowNull: false })
  Emissions: string;

  @Column({ type: DataType.STRING, allowNull: false })
  Acceleration: string;

  @Column({ type: DataType.STRING, allowNull: false })
  MaximumSpeed: string;
}
