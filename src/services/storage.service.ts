import { LoginResponseDto } from '../dto/login-response.dto';
import { User } from '../entities/user';

export default {
  login: (data: LoginResponseDto): void => {
    const { user, access_token } = data;
    localStorage.setItem('user:$$UrbanShaves@@', JSON.stringify(user));
    localStorage.setItem('access_token:$$UrbanShaves@@', access_token);
  },
  logout: (): void => {
    localStorage.removeItem('user:$$UrbanShaves@@');
    localStorage.removeItem('access_token:$$UrbanShaves@@');
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
  setStorageUser: (user: User): void => {
    localStorage.setItem('user:$$UrbanShaves@@', JSON.stringify(user));
  },
  getToken: (): string | null => {
    const access_token = localStorage.getItem('access_token:$$UrbanShaves@@');
    if (access_token) {
      return access_token;
    }
    return null;
  },
};
