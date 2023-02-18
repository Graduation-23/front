import {ResponseEntity} from '@type/api';
import client from './client';

export type AuthenticationType = {
  id: string;
  password: string;
};

export default function signIn(authentication: AuthenticationType) {
  return new Promise<ResponseEntity['token']>((res, rej) => {
    client
      .post('/auth/authenticate', authentication)
      .then(response => res(response.data.token))
      .catch(rej);
  });
}
