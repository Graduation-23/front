import {IMonthGoal} from '@type/api';
import client from '../client';
import logger from '@/utils/logger';

export default function fetchMonthGoalById(id: number) {
  return new Promise<IMonthGoal>(resolve => {
    client
      .get('/goal/month/' + id)
      .then(response => {
        resolve(response.data);
      })
      .catch(logger.error);
  });
}
