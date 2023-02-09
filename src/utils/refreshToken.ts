import {getItemAsync, setItemAsync} from './storage';

export const REFRESH_TOKEN_KEY = 'refreshToken';

type RefreshTokenType = {token: string};

export const getRefreshToken = () => {
  return new Promise<string>(resolve => {
    getItemAsync<RefreshTokenType>(REFRESH_TOKEN_KEY)
      .then(data => {
        if (data.token.length > 0) resolve(data.token);
      })
      .catch(() => {
        setItemAsync<RefreshTokenType>(REFRESH_TOKEN_KEY, {token: ''});
      });
  });
};

export const saveRefreshToken = (token: string) => {
  setItemAsync<RefreshTokenType>(REFRESH_TOKEN_KEY, {token});
};
