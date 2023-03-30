import client from '../client';
import logger from '@/utils/logger';

export default function fetchWeekAchieve() {
  return new Promise<number>(res => {
    client
      .get('/goal/week/achieve')
      .then(response => {
        res(response.data.data);
      })
      .catch(logger.error);
  });
}
