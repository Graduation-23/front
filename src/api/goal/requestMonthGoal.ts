import client from '../client';

interface MonthGoal {
  name: string;
  amount: number;
}

//body
export default function requestMonthGoal({name, amount}: MonthGoal) {
  return new Promise((resolve, reject) => {
    client
      .post('/goal/month', {amount: amount, name: name})
      .then(response => {
        resolve(response.data);
        console.log('requestMonthGoal 성공', response.data);
      })
      .catch(reject);
  });
}
