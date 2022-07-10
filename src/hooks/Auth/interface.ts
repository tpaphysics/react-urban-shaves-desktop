import { LoginDto } from '../../dto/login.dto';

export interface IAuthContext {
  signIn: (data: LoginDto) => Promise<void>;
  signOut: () => void;
  isAuthenticate: () => boolean;
}
