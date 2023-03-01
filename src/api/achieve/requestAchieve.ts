import client from '../client';

export default function requestAchieve(title: string) {
  return new Promise((resolve, reject) => {
    client
      .post('achieve', {title: title})
      .then(response => {
        resolve(response.data.data);
      })
      .catch(reject);
  });
}
