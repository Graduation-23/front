import client from '../client';

interface WeekGoal {
  id: number;
  name: string;
  amount: number;
}

//body
export default function requestWeekGoal({id, name, amount}: WeekGoal) {
  return new Promise((resolve, reject) => {
    client
      .post('/goal/week?goalMonthId=' + id, {amount: amount, name: name})
      .then(response => {
        resolve(response.data);
        console.log('requestWeekGoal 성공', response.data);
      })
      .catch(reject);
  });
}
