import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Optional } from 'sequelize';
import { NullishPropertiesOf } from 'sequelize/lib/utils';
import { NewsInfo } from 'src/models/news/news-info.model';

@Injectable()
export class CarNewsService {
  constructor(
    @InjectModel(NewsInfo)
    private readonly newsInfoModel: typeof NewsInfo,
  ) {}

  NewsInfo() {
    return this.newsInfoModel.findAll();
  }

  createNews() {
    return this.newsInfoModel.create({
      title: 'New Car Model Released',
      description:
        'The latest car model has been released with exciting features.',
      imageUrl: 'http://example.com/car-model.jpg',
      tag: '',
    } as Optional<NewsInfo, NullishPropertiesOf<NewsInfo>>);
  }
}
