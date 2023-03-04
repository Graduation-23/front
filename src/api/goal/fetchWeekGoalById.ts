import {IWeekGoal} from '@type/api';
import client from '../client';

export default function fetchWeekGoalById(weekId: number) {
  return new Promise<IWeekGoal>((resolve, reject) => {
    client
      .get('/goal/week/' + weekId)
      .then(response => {
        resolve(response.data.data);
      })
      .catch(reject);
  });
}
