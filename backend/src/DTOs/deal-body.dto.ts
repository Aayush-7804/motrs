import { IsNotEmpty, IsString } from 'class-validator';

export class DealBody {
  @IsNotEmpty()
  @IsString()
  name: string;
  @IsNotEmpty()
  @IsString()
  lastName: string;
  @IsNotEmpty()
  @IsString()
  email: string;
  @IsNotEmpty()
  @IsString()
  mobileNumber: string;
  @IsNotEmpty()
  @IsString()
  message: string;
}
