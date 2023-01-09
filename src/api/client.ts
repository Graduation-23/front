import axios from 'axios';
import {BASE_URL} from './constants';

const client = axios.create({
  baseURL: BASE_URL,
});

client.interceptors.request.use(req => {
  return req;
});

client.interceptors.response.use(rep => {
  return rep;
});

export default client;
