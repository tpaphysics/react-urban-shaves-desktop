import axios, { AxiosRequestConfig } from 'axios';

import StorageServices from '../services/Storage.service';
const { getToken } = StorageServices;

const api = axios.create({
  baseURL: 'http://localhost:3000',
});

api.interceptors.request.use(async (config: AxiosRequestConfig): Promise<AxiosRequestConfig> => {
  const token = getToken();
  if (token) {
    config.headers && (config.headers.Authorization = `Bearer ${token}`);
    //  console.log(config.headers);
  }
  return config;
});

export default api;
