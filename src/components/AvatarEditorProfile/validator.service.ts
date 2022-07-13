import config from './config';
const { allowedFormats, fileSize } = config;

export function imageValidator(file: File) {
  if (!file) {
    throw new Error('Choose a valid image format!');
  }
  const { size, type } = file;
  if (!allowedFormats.includes(type) || size >= fileSize) {
    throw new Error('Choose a valid image format!');
  }
}
