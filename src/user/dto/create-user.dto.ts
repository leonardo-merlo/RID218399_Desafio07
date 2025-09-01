// dto/create-user.dto.ts
import { IsEmail, IsNotEmpty, Length } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @Length(3, 100)
  name: string;

  @IsNotEmpty()
  @Length(3, 50)
  username: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  @Length(6, 255)
  password: string;
}
