import client from '../client';

export default function fetchGoal() {
  return new Promise((res, rej) => {
    client
      .get('/goal')
      .then(response => {
        res(response.data);
      })
      .catch(rej);
  });
}
