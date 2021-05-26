import axios from 'axios';

// 查看是否为生产环境
const isProduction = process.env.NODE_ENV !== 'development';

const request = axios.create({
  baseURL: isProduction ? '/api' : ''
  // timeout: timeout
  // headers: headers
});

/**
 * 请求拦截器
 */
request.interceptors.request.use(config => {
  return config;
}, error => {
  return Promise.reject(error);
});

/**
 * 响应拦截器
 */
requestaxios.interceptors.response.use(response => {
  return response;
}, error => {
  return Promise.reject(error);
});

export default request;