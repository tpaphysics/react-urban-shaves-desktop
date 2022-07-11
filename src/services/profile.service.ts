import { Dispatch } from 'react';

import api from '../api/api';
import { User } from '../entities/user';
import storageService from './storage.service';
const { setStorageUser } = storageService;
const nullFildsFilter = (obj: any): any => {
  const result = {} as any;
  for (const key in obj) {
    if (obj[key]) {
      result[key] = obj[key];
      console.log(obj[key]);
    }
  }
  return result;
};

export default {
  updateUser: async (data: any, id: string): Promise<User> => {
    return await api.patch(`users/${id}`, nullFildsFilter(data));
  },
  updateStorageUserAndSetUser: (cb: Dispatch<React.SetStateAction<User>>, user: User) => {
    setStorageUser(user);
    cb(user);
  },
};
