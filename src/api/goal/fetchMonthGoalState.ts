import client from '../client';
import logger from '@/utils/logger';

export type GoalState = {
  msg: string;
  success: boolean;
};

export default function fetchMonthGoalState(monthId: number) {
  return new Promise<GoalState>(resolve => {
    client
      .get('/goal/month/state?monthId=' + monthId)
      .then(response => {
        resolve(response.data.data);
      })
      .catch(logger.error);
  });
}
