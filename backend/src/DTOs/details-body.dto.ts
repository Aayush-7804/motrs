import { IsNotEmpty, IsString } from 'class-validator';

export class DetailsBody {
  @IsNotEmpty()
  @IsString()
  carCondition: string;
  @IsNotEmpty()
  @IsString()
  carLaunchYear: string;
  @IsNotEmpty()
  @IsString()
  carBrand: string;
  @IsNotEmpty()
  @IsString()
  carRange: string;
  @IsNotEmpty()
  @IsString()
  carModel: string;
  @IsNotEmpty()
  @IsString()
  carPrice: string;
}
