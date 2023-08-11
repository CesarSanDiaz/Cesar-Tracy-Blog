import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://cesar-tracy-blog-fe.vercel.app/',
  // timeout: 1000,
  // headers: { 'X-Custom-Header': 'foobar' },
});
