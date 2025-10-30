import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { DealerInfo } from './dealer-info.model';

@Table
export class DealerLocation extends Model<DealerLocation> {
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
  dealerId: DealerInfo;

  @Column({ type: DataType.STRING, allowNull: false })
  streets: string;

  @Column({ type: DataType.STRING, allowNull: false })
  city: string;

  @Column({ type: DataType.STRING })
  state: string;

  @Column({ type: DataType.INTEGER, allowNull: false })
  PIN: number;

  @Column({ type: DataType.STRING, allowNull: false })
  country: string;
}
