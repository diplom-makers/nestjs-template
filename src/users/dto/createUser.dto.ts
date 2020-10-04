import { IsInt, IsString, IsEmail } from 'class-validator';

export class CreateUserDto {
  @IsInt()
  readonly id: number;

  @IsString()
  readonly username: string;

  @IsEmail()
  readonly email: string;

  @IsString()
  readonly password: string;

  readonly hashPassword = () => null;
  readonly comparePassword = () => null;
}
