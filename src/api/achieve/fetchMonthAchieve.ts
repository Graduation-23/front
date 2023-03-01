import client from '../client';

export default function fetchMonthAchieve() {
  return new Promise<number>((resolve, reject) => {
    client
      .get('/achieve/month')
      .then(response => {
        resolve(response.data.data);
        console.log('mon: ', response.data.data);
      })
      .catch(reject);
  });
}
