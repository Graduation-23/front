import client from '../client';

interface MonthGoal {
  name: string;
  amount: number;
  weekIds: [];
}

//body
export default function requestMonthGoal({name, amount, weekIds}: MonthGoal) {
  return new Promise((resolve, reject) => {
    client
      .post('/goal/month', {amount: amount, name: name, weekIds: weekIds})
      .then(response => {
        resolve(response.data);
        console.log('requestMonthGoal 성공', response.data);
      })
      .catch(reject);
  });
}
