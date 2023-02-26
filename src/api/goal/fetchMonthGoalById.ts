import {IGoal} from '@type/api';
import client from '../client';

export default function fetchMonthGoalById(id: number) {
  return new Promise<IGoal>((resolve, reject) => {
    client
      .get('/goal/month/' + id)
      .then(response => {
        resolve(response.data);
        console.log('fetchMonthGoalById 성공', response.data);
      })
      .catch(reject);
  });
}
