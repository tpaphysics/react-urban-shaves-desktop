import { IsNotEmpty, IsOptional, Length, ValidateIf } from 'class-validator';

//import { Match } from '../decorators/match.decorator';

export class ProfileDto {
  @IsNotEmpty()
  //@Length(6, 15)
  name?: string;

  @IsOptional()
  @ValidateIf((field) => field.newPassword !== '')
  //@Length(6, 15)
  password!: string;
}
