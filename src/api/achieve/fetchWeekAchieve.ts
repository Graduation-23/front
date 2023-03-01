import client from '../client';

export default function fetchWeekAchieve() {
  return new Promise((resolve, reject) => {
    client
      .get('/achieve/week')
      .then(response => {
        resolve(response.data.data);
      })
      .catch(reject);
  });
}
