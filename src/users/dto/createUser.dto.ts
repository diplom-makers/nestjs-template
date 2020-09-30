import { IsInt, IsString } from 'class-validator';

export class CreateUserDto {
  @IsInt()
  readonly id: number;

  @IsString()
  readonly username: string;

  @IsString()
  readonly password: string;
}
