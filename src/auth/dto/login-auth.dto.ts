import { IsEmail, MaxLength, MinLength } from 'class-validator';

export class LoginAuthDto {
  @IsEmail()
  email: string;

  @MinLength(8)
  @MaxLength(12)
  password: string;
}
