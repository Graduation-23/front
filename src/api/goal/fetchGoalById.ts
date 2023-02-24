import client from '../client';

export default function fetchGoalById(goalId: number) {
  return new Promise((resolve, reject) => {
    client
      .get('/goal/' + goalId)
      .then(response => {
        resolve(response.data);
      })
      .catch(reject);
  });
}
