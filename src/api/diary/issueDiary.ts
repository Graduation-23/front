import client from '@api/client';

export default function issueDiary(date: string) {
  return new Promise<number>((resolve, reject) => {
    client
      .post(`/diary?date=${date}`, {
        Headers: {
          'Content-type': 'application/json',
        },
      })
      .then(r => resolve(r.data.data))
      .catch(reject);
  });
}
