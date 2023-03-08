import client from '../client';
import {GoalState} from './fetchMonthGoalState';
import logger from '@/utils/logger';

export default function fetchWeekGoalState(weekId: number) {
  return new Promise<GoalState>(resolve => {
    client
      .get('/goal/week/state?weekId=' + weekId)
      .then(response => {
        resolve(response.data.data);
      })
      .catch(logger.error);
  });
}
