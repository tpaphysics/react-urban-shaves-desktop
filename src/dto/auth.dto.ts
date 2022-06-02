import { IsString, Length, IsEmail } from "class-validator";

export class Auth {
  @IsEmail()
  @IsString()
  @Length(2, 30)
  email!: string;

  @IsString()
  @Length(2, 30)
  password!: string;
}
