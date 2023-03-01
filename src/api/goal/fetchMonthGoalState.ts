import client from '../client';

export type GoalState = {
  msg: string;
  success: boolean;
};

export default function fetchMonthGoalState(monthId: number) {
  return new Promise<GoalState>(resolve => {
    client
      .get('/goal/month/state?monthId=' + monthId)
      .then(response => {
        resolve(response.data);
        console.log('goalMonthState 성공 ', response.data);
      })
      .catch(err => {
        console.log('안돼!!', err);
      });
  });
}
