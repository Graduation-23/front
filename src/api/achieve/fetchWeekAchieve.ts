import client from '../client';

export default function fetchWeekAchieve() {
  return new Promise<number>((resolve, reject) => {
    client
      .get('/achieve/week')
      .then(response => {
        resolve(response.data.data);
        console.log('mon: ', response.data.data);
      })
      .catch(reject);
  });
}
