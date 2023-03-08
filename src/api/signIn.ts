import {ResponseEntity} from '@type/api';
import client from './client';
import logger from '@/utils/logger';

export type AuthenticationType = {
  id: string;
  password: string;
};

export default function signIn(authentication: AuthenticationType) {
  return new Promise<ResponseEntity['token']>(res => {
    client
      .post('/auth/authenticate', authentication)
      .then(response => res(response.data.token))
      .catch(logger.error);
  });
}
