import api from '../api/api';
import { RegisterDto } from '../dto/register.dto';

export default {
  createNewUser: async (data: RegisterDto): Promise<void> => {
    return await api.post('/users', data);
  },
};
