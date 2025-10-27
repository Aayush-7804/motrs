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
  tableName: 'car-features',
})
export class Features extends Model<Features> {
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
  AC: string;

  @Column({ type: DataType.STRING, allowNull: false })
  ABS: string;

  @Column({ type: DataType.STRING, allowNull: false })
  AuxIn: string;

  @Column({ type: DataType.STRING, allowNull: false })
  BC: string;

  @Column({ type: DataType.STRING, allowNull: false })
  'BAS-EBA': string;

  @Column({ type: DataType.STRING, allowNull: false })
  ClothUpholstery: string;

  @Column({ type: DataType.STRING, allowNull: false })
  CurtainAirbags: string;

  @Column({ type: DataType.STRING, allowNull: false })
  DriverAirbag: string;

  @Column({ type: DataType.STRING, allowNull: false })
  ElectricWindows: string;

  @Column({ type: DataType.STRING, allowNull: false })
  EAM: string;

  @Column({ type: DataType.STRING, allowNull: false })
  EBD: string;

  @Column({ type: DataType.STRING, allowNull: false })
  FRS: string;

  @Column({ type: DataType.STRING, allowNull: false })
  FFL: string;

  @Column({ type: DataType.STRING, allowNull: false })
  FPassA: string;

  @Column({ type: DataType.STRING, allowNull: false })
  FSideA: string;

  @Column({ type: DataType.STRING, allowNull: false })
  ICSM: string;

  @Column({ type: DataType.STRING, allowNull: false })
  MFSWC: string;

  @Column({ type: DataType.STRING, allowNull: false })
  OnBoardComputer: string;

  @Column({ type: DataType.STRING, allowNull: false })
  RCL: string;

  @Column({ type: DataType.STRING, allowNull: false })
  ServicePlan: string;

  @Column({ type: DataType.STRING, allowNull: false })
  SplitRearSeat: string;

  @Column({ type: DataType.STRING, allowNull: false })
  StabilityControl: string;

  @Column({ type: DataType.STRING, allowNull: false })
  TractionControl: string;

  @Column({ type: DataType.STRING, allowNull: false })
  USBPort: string;

  @Column({ type: DataType.STRING, allowNull: false })
  ChildProof: string;

  @Column({ type: DataType.STRING, allowNull: false })
  HeadlightLevel: string;

  @Column({ type: DataType.STRING, allowNull: false })
  RearFogLamps: string;

  @Column({ type: DataType.STRING, allowNull: false })
  SpareWheelSize: string;
}
