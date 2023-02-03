import {ResponseEntity} from '../../types/api';
import client, {setRefreshToken} from './client';

export default function requestRevokeToken(refreshToken: string) {
  // setRefreshToken
  setRefreshToken(refreshToken, false);
  // request
  return new Promise<ResponseEntity['token']>((resolve, reject) => {
    client
      .post('/auth/revoke')
      .then(response => resolve(response.data.token))
      .catch(reject);
  });
}
