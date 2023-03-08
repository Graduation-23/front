import client from './client';
import logger from '@/utils/logger';

export default function checkOpenbank() {
  return new Promise<boolean>(resolve => {
    client
      .get('/openbank/check-auth')
      .then(response => {
        resolve(response.data.data);
      })
      .catch(logger.error);
  });
}
