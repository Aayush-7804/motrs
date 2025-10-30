import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasOne,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { Overview } from './overview.model';
import { Body } from './body.model';
import { Features } from './features.model';
import { EnE } from './EnE.model';
import { EnD } from './EnD.model';
import { DealerInfo } from '../dealer/dealer-info.model';

@Table({
  tableName: 'car_info',
})
export class CarInfo extends Model<CarInfo> {
  @PrimaryKey
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    allowNull: false,
  })
  id: string = '';

  @BelongsTo(() => DealerInfo)
  dealer: DealerInfo;

  @ForeignKey(() => DealerInfo)
  @Column({ type: DataType.UUID, allowNull: false })
  dealerId: string;

  @Column({ type: DataType.STRING, allowNull: false })
  carCondition: string;

  @Column({ type: DataType.STRING, allowNull: false })
  carLaunchYear: string;

  @Column({ type: DataType.STRING, allowNull: false })
  carBrand: string;

  @Column({ type: DataType.STRING, allowNull: false })
  carRange: string;

  @Column({ type: DataType.STRING, allowNull: false })
  carModel: string;

  @Column({ type: DataType.STRING, allowNull: false })
  carColor: string;

  @Column({ type: DataType.STRING, allowNull: false })
  carPrice: string;

  @Column({ type: DataType.STRING })
  carPrePrice?: string;

  @Column({ type: DataType.STRING, allowNull: false })
  carEMI: string;

  @Column({ type: DataType.STRING, allowNull: false })
  carDescription: string;

  @Column({ type: DataType.ARRAY(DataType.STRING), allowNull: false })
  carImagesUrl: string[];

  @HasOne(() => Overview)
  carOverview: Overview;

  @HasOne(() => Body)
  body: Body;

  @HasOne(() => EnD)
  EnD: EnD;

  @HasOne(() => EnE)
  EnE: EnE;

  @HasOne(() => Features)
  features: Features;
}
