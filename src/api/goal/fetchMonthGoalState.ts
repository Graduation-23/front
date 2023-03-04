import client from '../client';

export type GoalState = {
  msg: string;
  success: boolean;
};

export default function fetchMonthGoalState(monthId: number) {
  return new Promise<GoalState>((resolve, reject) => {
    client
      .get('/goal/month/state?monthId=' + monthId)
      .then(response => {
        resolve(response.data);
        console.log(response.data.data);
      })
      .catch(reject);
  });
}
