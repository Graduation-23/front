import client from '../client';

interface MonthGoal {
  amount: number;
  weekIds: [];
}

//body
export default function requestMonthGoal({amount, weekIds}: MonthGoal) {
  return new Promise((resolve, reject) => {
    client
      .post('/goal/month', {amount: amount, weekIds: weekIds})
      .then(response => {
        resolve(response.data);
        console.log('requestMonthGoal 성공', response.data);
      })
      .catch(reject);
  });
}
