/** @format */

// api.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:4000/api/v1', // Replace with your API base URL
  timeout: 5000, // Adjust timeout as needed
});

export const get = (url, config = {}) => instance.get(url, config);
export const post = (url, data, config = {}) =>
  instance.post(url, data, config);
export const put = (url, data, config = {}) => instance.put(url, data, config);
export const del = (url, config = {}) => instance.delete(url, config);

// You can add more custom methods or configurations as needed
export const customRequest = (method, url, data, config = {}) =>
  instance.request({ method, url, data, ...config });

// How you can use these methods inside your components

// import { get, post, put, del, customRequest } from './api'; // Adjust the path accordingly

//     // Example GET request
//     get('/data')
//       .then(response => {
//         console.log(response.data);
//       })
//       .catch(error => {
//         console.error('Error:', error);
//       });

//     // Example POST request
//     const postData = { key: 'value' };
//     post('/create', postData)
//       .then(response => {
//         console.log(response.data);
//       })
//       .catch(error => {
//         console.error('Error:', error);
//       });

//     // Example PUT request
//     const putData = { updatedKey: 'updatedValue' };
//     put('/update/123', putData)
//       .then(response => {
//         console.log(response.data);
//       })
//       .catch(error => {
//         console.error('Error:', error);
//       });

//     // Example DELETE request
//     del('/delete/456')
//       .then(response => {
//         console.log(response.data);
//       })
//       .catch(error => {
//         console.error('Error:', error);
//       });

//     // Example custom request
//     const customData = { customKey: 'customValue' };
//     customRequest('PATCH', '/custom/789', customData)
//       .then(response => {
//         console.log(response.data);
//       })
//       .catch(error => {
//         console.error('Error:', error);
//       });
