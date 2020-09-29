import { IsInt, IsNumber, IsString } from 'class-validator';

export class CreateUserDto {
  @IsInt()
  readonly id: number;

  @IsString()
  readonly name: string;

  @IsNumber()
  readonly age: number;
}
