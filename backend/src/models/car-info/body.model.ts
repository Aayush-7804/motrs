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
  tableName: 'car-body',
})
export class Body extends Model<Body> {
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
  BodyType: string;

  @Column({ type: DataType.STRING, allowNull: false })
  Doors: string;

  @Column({ type: DataType.STRING, allowNull: false })
  Length: string;

  @Column({ type: DataType.STRING, allowNull: false })
  Width: string;

  @Column({ type: DataType.STRING, allowNull: false })
  Height: string;

  @Column({ type: DataType.STRING, allowNull: false })
  Weight: string;

  @Column({ type: DataType.STRING, allowNull: false })
  Seats: string;

  @Column({ type: DataType.STRING, allowNull: false })
  FrontTyres: string;

  @Column({ type: DataType.STRING, allowNull: false })
  RearTyres: string;

  @Column({ type: DataType.STRING, allowNull: false })
  DrivenWheels: string;
}
