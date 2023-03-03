import client from '../client';

export default function fetchWeekAchieve() {
  return new Promise<number>((res, rej) => {
    client
      .get('/goal/week/achieve')
      .then(response => {
        res(response.data.data);
      })
      .catch(rej);
  });
}
