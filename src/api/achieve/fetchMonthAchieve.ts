import client from '../client';

export default function fetchMonthAchieve() {
  return new Promise((resolve, reject) => {
    client
      .get('/achieve/month')
      .then(response => {
        resolve(response.data.data);
      })
      .catch(reject);
  });
}
