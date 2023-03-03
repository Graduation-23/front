import client from '../client';

interface WeekGoal {
  id: number | undefined;
  amount: number;
}

//body
export default function requestWeekGoal({id, amount}: WeekGoal) {
  return new Promise((resolve, reject) => {
    client
      .put(`/goal/week?id=${id}&amount=${amount}`, {
        Headers: {
          'Content-type': 'application/json',
        },
      })
      .then(response => {
        resolve(response.data);
      })
      .catch(reject);
  });
}
