import api from '../../../api/api';
import { LoginDto } from '../../../dto/login.dto';
import StorageServices from '../../../services/Storage.service';

const { login, logout, isLogued } = StorageServices;

export default {
  signIn: async (data: LoginDto): Promise<void> => {
    const { data: response } = await api.post('login', data);
    login(response);
  },
  signOut: async (): Promise<void> => {
    logout();
  },
  isAuthenticate: (): boolean => {
    return isLogued();
  },
};
