import {ResponseEntity} from '@type/api';
import client from './client';
import logger from '@/utils/logger';

export type NewAuthenticationType = {
  id: string;
  password: string;
  nickname: string;
};

export default function signUp(authentication: NewAuthenticationType) {
  return new Promise<ResponseEntity['token']>(res => {
    client
      .post('/auth/signup', authentication)
      .then(response => {
        res(response.data.token);
        console.log('성공');
      })
      .catch(logger.error);
  });
}
