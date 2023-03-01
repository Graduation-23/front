import client from '../client';

export default function fetchAchieve() {
  return new Promise((resolve, reject) => {
    client
      .get('/achieve')
      .then(response => {
        resolve(response.data.data);
      })
      .catch(reject);
  });
}
