import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:4000/api/v1',
  timeout: 5000,
});

const getAuthToken = () => {
  return localStorage.getItem('token');
};

export const get = (url, config = {}) =>
  instance.get(url, {
    ...config,
    headers: { Authorization: `Bearer ${getAuthToken()}` },
  });
export const post = (url, data, config = {}) =>
  instance.post(url, data, {
    ...config,
    headers: { Authorization: `Bearer ${getAuthToken()}` },
  });
export const put = (url, data, config = {}) =>
  instance.put(url, data, {
    ...config,
    headers: { Authorization: `Bearer ${getAuthToken()}` },
  });
export const del = (url, config = {}) =>
  instance.delete(url, {
    ...config,
    headers: { Authorization: `Bearer ${getAuthToken()}` },
  });

export const customRequest = (method, url, data, config = {}) =>
  instance.request({
    method,
    url,
    data,
    ...config,
    headers: { Authorization: `Bearer ${getAuthToken()}` },
  });
