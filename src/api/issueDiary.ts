import client from './client';

export default function issueDiary(date: string) {
  return new Promise<number>((resolve, reject) => {
    client
      .post(`/diary?date=${date}`)
      .then(r => resolve(r.data.data))
      .catch(reject);
  });
}
