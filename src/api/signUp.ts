import {ResponseEntity} from '@type/api';
import client from './client';

export type NewAuthenticationType = {
  id: string;
  password: string;
  nickname: string;
};

export default function signUp(authentication: NewAuthenticationType) {
  return new Promise<ResponseEntity['token']>((res, rej) => {
    client
      .post('/auth/signup', authentication)
      .then(response => res(response.data.token))
      .catch(rej);
  });
}
