import client from '../client';
import logger from '@/utils/logger';

interface WeekGoal {
  id: number | undefined;
  amount: number;
}

//body
export default function requestWeekGoal({id, amount}: WeekGoal) {
  return new Promise(resolve => {
    client
      .put(`/goal/week?id=${id}&amount=${amount}`, {
        Headers: {
          'Content-type': 'application/json',
        },
      })
      .then(response => {
        resolve(response.data);
      })
      .catch(logger.error);
  });
}
