import { IsOptional, Length, ValidateIf } from 'class-validator';

//import { Match } from '../decorators/match.decorator';

export class ProfileDto {
  @IsOptional()
  @ValidateIf((field) => field.name !== '')
  //@Length(6, 15)
  name?: string;

  @IsOptional()
  @ValidateIf((field) => field.newPassword !== '')
  //@Length(6, 15)
  password!: string;
}
