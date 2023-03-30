import client from './client';
import logger from '@/utils/logger';

export default function cutOpenbank() {
  return new Promise<any>(resolve => {
    client
      .delete('/openbank')
      .then(res => resolve(res.data))
      .catch(logger.error);
  });
}
