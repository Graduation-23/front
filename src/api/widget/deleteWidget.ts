import client from '../client';
import logger from '@/utils/logger';

export default function deleteWidget(id: number) {
  return new Promise<any>(resolve => {
    client
      .delete(`/widget?id=${id}`)
      .then(r => resolve(r.data))
      .catch(logger.error);
  });
}
