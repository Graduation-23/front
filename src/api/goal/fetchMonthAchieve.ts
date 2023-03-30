import client from '../client';
import logger from '@/utils/logger';

export default function fetchMonthAchieve() {
  return new Promise<number>(res => {
    client
      .get('/goal/month/achieve')
      .then(response => {
        res(response.data.data);
      })
      .catch(logger.error);
  });
}
