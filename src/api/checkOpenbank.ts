import client from './client';

export default function checkOpenbank() {
  return new Promise<boolean>((resolve, reject) => {
    client
      .get('/openbank/check-auth')
      .then(response => {
        resolve(response.data.data);
      })
      .catch(reject);
  });
}
