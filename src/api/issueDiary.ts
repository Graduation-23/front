import client from './client';

export default function issueDiary(date: string) {
  return new Promise((resolve, reject) => {
    client
      .post(`/diary?diarydate=${date}`)
      .then(r => resolve(r.data.data))
      .catch(reject);
  });
}
