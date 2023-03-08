import {IDiary} from '@type/api';
import client from '@api/client';
import logger from '@/utils/logger';

export default function fetchDiaryById(id: number) {
  return new Promise<IDiary>(resolve => {
    client
      .get('/diary/' + id)
      .then(response => {
        resolve(response.data.data);
      })
      .catch(logger.error);
  });
}
