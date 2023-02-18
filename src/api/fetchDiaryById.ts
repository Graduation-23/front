import {IDiary} from '@type/api';
import client from './client';

export default function fetchDiaryById(id: number) {
  return new Promise<IDiary>((resolve, reject) => {
    client
      .get('/diary/' + id)
      .then(response => {
        resolve(response.data.data);
      })
      .catch(reject);
  });
}
