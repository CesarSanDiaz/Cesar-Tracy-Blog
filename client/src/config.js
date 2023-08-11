import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://cesar-tracy-blog.vercel.app/api/',
  // timeout: 1000,
  // headers: { 'X-Custom-Header': 'foobar' },
});
