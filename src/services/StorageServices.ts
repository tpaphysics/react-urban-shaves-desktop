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
    const user = localStorage.getItem('user:$$UrbanShaves@@');
    if (user) {
      return JSON.parse(user);
    }
    return null;
  },
};
