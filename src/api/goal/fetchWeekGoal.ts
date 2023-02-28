import {IWeekGoal} from '@type/api';
import client from '../client';

export default function fetchWeekGoal(id: number) {
  return new Promise<IWeekGoal>((resolve, reject) => {
    client
      .get('/goal/week?goalMonthId=' + id)
      .then(response => {
        resolve(response.data.data);
      })
      .catch(reject);
  });
}
