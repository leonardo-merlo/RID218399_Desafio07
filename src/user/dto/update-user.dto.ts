// dto/update-user.dto.ts
import { IsEmail, IsOptional, Length } from 'class-validator';

export class UpdateUserDto {
  @IsOptional()
  @Length(3, 100)
  name?: string;

  @IsOptional()
  @Length(3, 50)
  username?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @Length(6, 255)
  password?: string;
}
