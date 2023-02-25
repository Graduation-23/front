import client from '../client';

export default function fetchMonthGoal() {
  return new Promise((resolve, reject) => {
    client
      .get('/goal/month')
      .then(response => {
        resolve(response.data);
        console.log('fetchMonthGoal 성공', response.data);
      })
      .catch(reject);
  });
}
