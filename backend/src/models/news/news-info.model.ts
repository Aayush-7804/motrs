import {
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';

@Table
export class NewsInfo extends Model<NewsInfo> {
  @PrimaryKey
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    allowNull: false,
  })
  id: string = '';

  @Column({ type: DataType.STRING, allowNull: false })
  title: string;

  @Column({ type: DataType.STRING, allowNull: false })
  description: string;

  @Column({ type: DataType.STRING, allowNull: false })
  tag: string;

  @Column({ type: DataType.STRING, allowNull: false })
  imageUrl: string;
}
