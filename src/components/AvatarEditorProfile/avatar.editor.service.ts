import api from '../../api/api';
import config from './config';
const { allowedFormats, fileSize } = config;

export default {
  urlToFile: async (url: string, filename: string, fileType: string): Promise<File> => {
    const res = await fetch(url);
    const buf = await res.arrayBuffer();
    return new File([buf], filename, { type: fileType });
  },
  imageValidator: (file: File): void => {
    const { size, type } = file;
    if (!allowedFormats.includes(type) || size >= fileSize) {
      throw new Error('Choose a valid image format!');
    }
  },
  avatarUpdate: async (file: File, id: string): Promise<any> => {
    const data = new FormData();
    data.append('file', file);

    return await api.patch(`/users/${id}`, data);
  },
};
