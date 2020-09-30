import { IsInt, IsNumber, IsString } from 'class-validator';

export class CreateUserDto {
  @IsInt()
  readonly id: number;

  @IsString()
  readonly name: string;

  @IsString()
  readonly username: string;

  @IsString()
  readonly password: string;

  @IsNumber()
  readonly age: number;
}
