import client from '../client';
import logger from '@/utils/logger';

interface MonthGoal {
  amount: number;
  weekIds: [];
}

//body
export default function requestMonthGoal({amount, weekIds}: MonthGoal) {
  return new Promise(resolve => {
    client
      .post('/goal/month', {amount: amount, weekIds: weekIds})
      .then(response => {
        resolve(response.data);
      })
      .catch(logger.error);
  });
}
