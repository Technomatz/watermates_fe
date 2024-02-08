import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:4000/api/v1',
  timeout: 5000,
});

const getAuthToken = () => {
  const token = localStorage.getItem('token');
  if (token) {
    return token;
  }
  return;
};

console.log(getAuthToken(), './/////authtokenfunc');

axiosInstance.interceptors.request.use((config) => {
  const token = getAuthToken();
  const { isAuthRequired = false } = config;
  if (token && isAuthRequired) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const Get = (url, config = {}) => axiosInstance.get(url, config);

export const Post = (url, data, config = {}) =>
  axiosInstance.post(url, data, config);

export const Put = (url, data, config = {}) =>
  axiosInstance.put(url, data, config);

export const Delete = (url, data, config = {}) =>
  axiosInstance.delete(url, data, config);

export const CustomRequest = (method, url, data, config = {}) =>
  axiosInstance.request({
    method,
    url,
    data,
    ...config,
  });
