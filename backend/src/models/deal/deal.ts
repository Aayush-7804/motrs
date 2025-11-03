import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { CarInfo } from '../car-info/car-info.model';

@Table
export class Deal extends Model<Deal> {
  @PrimaryKey
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    allowNull: false,
  })
  id: string = '';

  @BelongsTo(() => CarInfo)
  car: CarInfo;

  @ForeignKey(() => CarInfo)
  @Column({ type: DataType.UUID, allowNull: false })
  carId: string;

  @Column({ type: DataType.STRING, allowNull: false })
  name: string;
  @Column({ type: DataType.STRING, allowNull: false })
  lastName: string;
  @Column({ type: DataType.STRING, allowNull: false, unique: true })
  email: string;
  @Column({ type: DataType.STRING, allowNull: false })
  mobileNumber: string;
  @Column({ type: DataType.STRING, allowNull: false })
  message: string;
}
