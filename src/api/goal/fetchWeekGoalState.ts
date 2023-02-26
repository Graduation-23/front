import client from '../client';
interface Props {
  msg: string;
}

export default function fetchWeekGoalState(weekId: number) {
  return new Promise<Props>((resolve, reject) => {
    client
      .get('/goal/week/state?weekId=' + weekId)
      .then(response => {
        resolve(response.data.data);
        console.log('goalWeekState 성공 ', response.data.data);
      })
      .catch(reject);
  });
}
