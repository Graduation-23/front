import client from '../client';
import {GoalState} from './fetchMonthGoalState';

export default function fetchWeekGoalState(weekId: number) {
  return new Promise<GoalState>((resolve, reject) => {
    client
      .get('/goal/week/state?weekId=' + weekId)
      .then(response => {
        resolve(response.data.data);
        console.log('goalWeekState 성공 ', response.data.data);
      })
      .catch(err => {
        console.log('안돼', err);
      });
  });
}
