import { Dispatch } from 'react';

import { LoginDto } from '../../dto/login.dto';
import { User } from '../../entities/user';

export interface IAuthContext {
  signIn: (data: LoginDto) => Promise<void>;
  signOut: () => void;
  isAuthenticate: () => boolean;
  currentUser: User;
  setUser: Dispatch<React.SetStateAction<User>>;
}
