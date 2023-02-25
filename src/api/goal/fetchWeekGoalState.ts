import {IGoal} from '@type/api';
import client from '../client';

export default function fetchWeekGoalState() {
  return new Promise<IGoal>((resolve, reject) => {
    client
      .get('/goal/week/state')
      .then(response => {
        resolve(response.data);
        console.log('goalWeekState 성공 ', response.data);
      })
      .catch(reject);
  });
}
