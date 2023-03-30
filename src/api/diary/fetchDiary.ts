import {IDiary} from '@type/api';
import client from '@api/client';
import logger from '@/utils/logger';

export default function fetchDiary() {
  return new Promise<IDiary[]>(resolve => {
    client
      .get('/diary')
      .then(response => {
        resolve(response.data.data);
      })
      .catch(logger.error);
  });
}
