import { LoginResponseDto } from '../dto/login-response.dto';
import { User } from '../entities/user';

export default {
  login: (data: LoginResponseDto): void => {
    localStorage.setItem('user:$$UrbanShaves@@', JSON.stringify(data));
  },
  logout: (): void => {
    localStorage.removeItem('user:$$UrbanShaves@@');
  },
  isLogged: (): boolean => {
    const user = localStorage.getItem('user:$$UrbanShaves@@');
    if (user) {
      return true;
    }
    return false;
  },
  getUser: (): User | null => {
    const userReturn = localStorage.getItem('user:$$UrbanShaves@@');
    if (userReturn) {
      const { _, user } = JSON.parse(userReturn);
      return user;
    }
    return null;
  },
  getToken: (): string | null => {
    const user = localStorage.getItem('user:$$UrbanShaves@@');
    if (user) {
      const { access_token } = JSON.parse(user) as LoginResponseDto;
      return access_token;
    }
    return null;
  },
};
