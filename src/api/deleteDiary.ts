import logger from '@utils/logger';
import client from './client';

export default function deleteDiary(id: number) {
  return new Promise<any>((resolve, reject) => {
    logger.log(`/diary/${id}`);
    client
      .delete(`/diary/${id}`)
      .then(r => resolve(r.data))
      .catch(reject);
  });
}
