import client from '../client';

interface WeekGoal {
  id: number;
  amount: number;
}

//body
export default function requestWeekGoal({id, amount}: WeekGoal) {
  return new Promise((resolve, reject) => {
    client
      .post('/goal/week?goalMonthId=' + id, {amount})
      .then(response => {
        resolve(response.data);
        console.log('requestWeekGoal 성공', response.data);
      })
      .catch(reject);
  });
}
