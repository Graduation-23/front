import {IWeekGoal} from '@type/api';
import client from '../client';
import logger from '@/utils/logger';

export default function fetchWeekGoal(id: number) {
  return new Promise<IWeekGoal>(resolve => {
    client
      .get('/goal/week?goalMonthId=' + id)
      .then(response => {
        resolve(response.data.data);
      })
      .catch(logger.error);
  });
}
