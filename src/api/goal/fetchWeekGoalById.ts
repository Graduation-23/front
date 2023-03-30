import {IWeekGoal} from '@type/api';
import client from '../client';
import logger from '@/utils/logger';

export default function fetchWeekGoalById(weekId: number) {
  return new Promise<IWeekGoal>(resolve => {
    client
      .get('/goal/week/' + weekId)
      .then(response => {
        resolve(response.data.data);
      })
      .catch(logger.error);
  });
}
