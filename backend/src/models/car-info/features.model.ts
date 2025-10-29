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
  tableName: 'car_features',
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
  'Air Conditioning': string;

  @Column({ type: DataType.STRING, allowNull: false })
  'Anti-Lock Braking System (ABS)': string;

  @Column({ type: DataType.STRING, allowNull: false })
  'Aux In (Auxiliary Input)': string;

  @Column({ type: DataType.STRING, allowNull: false })
  'Bluetooth Connectivity': string;

  @Column({ type: DataType.STRING, allowNull: false })
  'Brake Assist (BAS/EBA)': string;

  @Column({ type: DataType.STRING, allowNull: false })
  'Cloth Upholstery': string;

  @Column({ type: DataType.STRING, allowNull: false })
  'Curtain Airbags': string;

  @Column({ type: DataType.STRING, allowNull: false })
  'Driver Airbag': string;

  @Column({ type: DataType.STRING, allowNull: false })
  'Electric Windows': string;

  @Column({ type: DataType.STRING, allowNull: false })
  'Electric-Adjust Mirrors': string;

  @Column({ type: DataType.STRING, allowNull: false })
  'Electronic Brake Distribution (EBD)': string;

  @Column({ type: DataType.STRING, allowNull: false })
  'Folding Rear Seat': string;

  @Column({ type: DataType.STRING, allowNull: false })
  'Front Fog Lamps/Lights': string;

  @Column({ type: DataType.STRING, allowNull: false })
  'Front Passenger Airbag': string;

  @Column({ type: DataType.STRING, allowNull: false })
  'Front Side Airbags': string;

  @Column({ type: DataType.STRING, allowNull: false })
  'Isofix Child Seat Mountings': string;

  @Column({ type: DataType.STRING, allowNull: false })
  'Multi-Function Steering Wheel Controls': string;

  @Column({ type: DataType.STRING, allowNull: false })
  'On-Board Computer / Multi-Information Display': string;

  @Column({ type: DataType.STRING, allowNull: false })
  'Remote Central Locking': string;

  @Column({ type: DataType.STRING, allowNull: false })
  'Service Plan': string;

  @Column({ type: DataType.STRING, allowNull: false })
  'Split Rear Seat': string;

  @Column({ type: DataType.STRING, allowNull: false })
  'Stability Control': string;

  @Column({ type: DataType.STRING, allowNull: false })
  'Traction Control': string;

  @Column({ type: DataType.STRING, allowNull: false })
  'USB Port': string;

  @Column({ type: DataType.STRING, allowNull: false })
  'Child-Proof/Safety Lock': string;

  @Column({ type: DataType.STRING, allowNull: false })
  'Headlight Level/Range/Height Adjustment': string;

  @Column({ type: DataType.STRING, allowNull: false })
  'Rear Fog Lamps / Lights': string;

  @Column({ type: DataType.STRING, allowNull: false })
  'Spare-Wheel Size': string;
}
