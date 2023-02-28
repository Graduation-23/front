import {IWeekGoal} from '@type/api';
import client from '../client';

export default function fetchWeekGoalById(goalId: number) {
  return new Promise<IWeekGoal>((resolve, reject) => {
    client
      .get('/goal/week/' + goalId)
      .then(response => {
        resolve(response.data.data);
      })
      .catch(reject);
  });
}
