import client from '../client';

type GoalWeekly = {
  name: string;
  money: number;
};

export default function createGoalWeekly({name, money}: GoalWeekly) {
  return new Promise((res, rej) => {
    client
      .post('/goal/week', {name, money})
      .then(v => {
        console.log(v.data);
      })
      .catch(rej);
  });
}
