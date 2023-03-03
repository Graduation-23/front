import client from '../client';

export default function fetchMonthAchieve() {
  return new Promise<number>((res, rej) => {
    client
      .get('/goal/month/achieve')
      .then(response => {
        res(response.data.data);
      })
      .catch(rej);
  });
}
