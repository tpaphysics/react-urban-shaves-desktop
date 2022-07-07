import api from '../../../api/api';
import { LoginDto } from '../../../dto/login.dto';
import StorageServices from '../../../services/StorageServices';

const { login, logout, isLogged } = StorageServices;

export default {
  signIn: async (data: LoginDto): Promise<void> => {
    const { data: response } = await api.post('login', data);
    login(response);
  },
  signOut: async (): Promise<void> => {
    logout();
  },
  isAuthenticate: (): boolean => {
    return isLogged();
  },
};
