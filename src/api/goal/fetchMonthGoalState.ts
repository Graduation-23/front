import {IGoal} from '@type/api';
import client from '../client';

export default function fetchMonthGoalState() {
  return new Promise<IGoal>((resolve, reject) => {
    client
      .get('/goal/month/state')
      .then(response => {
        resolve(response.data);
        console.log('goalMonthState 성공 ', response.data);
      })
      .catch(reject);
  });
}
