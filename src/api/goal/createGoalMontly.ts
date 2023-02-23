import client from '../client';

type GoalMonthly = {
  name: string;
  money: number;
};

export default function createGoalMonthly({name, money}: GoalMonthly) {
  return new Promise((res, rej) => {
    client
      .post('/goal/month', {name, money})
      .then(v => {
        console.log(v.data);
      })
      .catch(rej);
  });
}
