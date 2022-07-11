import api from '../api/api';
import { LoginResponseDto } from '../dto/login-response.dto';
import { RegisterDto } from '../dto/register.dto';

export default {
  createNewUser: async (data: RegisterDto): Promise<LoginResponseDto> => {
    return await api.post('/users', data);
  },
};
