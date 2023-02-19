import client from '../client';

export default function deleteDiary(id: number) {
  return new Promise<any>((resolve, reject) => {
    client
      .delete(`/diary?diaryId=${id}`)
      .then(r => resolve(r.data))
      .catch(reject);
  });
}
