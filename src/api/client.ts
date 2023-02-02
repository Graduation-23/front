import axios from 'axios';
import {saveRefreshToken} from '../utils/refreshToken';
import {BASE_URL} from './constants';

const ACCESS_HEADER_KEY = 'Authorization';
const REFRESH_HEADER_KEY = 'AuthorizationSecret';
const TOKEN_TYPE = 'Bearer';

const client = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

client.interceptors.request.use(req => {
  return req;
});

client.interceptors.response.use(res => {
  if (res.status === 200 && res.data.token) {
    const token = res.data.token as {access?: string; refresh?: string};
    if (token.access) setAccessToken(token.access);
    if (token.refresh) setRefreshToken(token.refresh);
  }

  return res;
});

export const setRefreshToken = (token: string) => {
  client.defaults.headers.common[REFRESH_HEADER_KEY] = `${TOKEN_TYPE} ${token}`;
  saveRefreshToken(token);
};

export const setAccessToken = (token: string) => {
  client.defaults.headers.common[ACCESS_HEADER_KEY] = `${TOKEN_TYPE} ${token}`;
};

export const setAuthHeader = (data: any) => {
  setAccessToken(data.access);
  setRefreshToken(data.refresh);
};

export default client;
