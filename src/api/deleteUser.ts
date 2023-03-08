import client from './client';
import logger from '@/utils/logger';

export default function deleteUser(password: {password: string}) {
  return new Promise<any>(resolve => {
    client
      .delete('/user', {params: password})
      .then(res => {
        resolve(res.data);
      })
      .catch(logger.error);
  });
}
