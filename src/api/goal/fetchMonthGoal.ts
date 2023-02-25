import {IGoal} from '@type/api';
import client from '../client';

export default function fetchMonthGoal() {
  return new Promise<IGoal[]>((resolve, reject) => {
    client
      .get('/goal/month')
      .then(response => {
        resolve(response.data.data);
      })
      .catch(reject);
  });
}