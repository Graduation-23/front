import client from '../client';

export default function deleteWidget(id: number) {
  return new Promise<any>((resolve, reject) => {
    client
      .delete(`/widget?id=${id}`)
      .then(r => resolve(r.data))
      .catch(reject);
  });
}
