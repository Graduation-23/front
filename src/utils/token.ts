import {setAuthHeader} from '../api/client';
import requestRevokeToken from '../api/requestRevokeToken';
import {getRefreshToken} from './refreshToken';

export interface IToken {
  access: string;
  refresh: string;
}

export const initializeToken = async () => {
  const token = await getRefreshToken();

  const issuedToken = await requestRevokeToken(token);

  setAuthHeader(issuedToken);
};
