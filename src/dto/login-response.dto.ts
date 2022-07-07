import { User } from '../entities/user';

export class LoginResponseDto {
  user!: User;
  access_token!: string;
}
