import {ResponseEntity} from '@type/api';
import client, {setRefreshToken} from './client';
import logger from '@/utils/logger';

export default function requestRevokeToken(refreshToken: string) {
  // setRefreshToken
  setRefreshToken(refreshToken, false);
  // request
  return new Promise<ResponseEntity['token']>(resolve => {
    client
      .post('/auth/revoke')
      .then(response => resolve(response.data.token))
      .catch(logger.error);
  });
}
