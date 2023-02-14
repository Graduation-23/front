import {IDiary} from '../../types/api';
import client from './client';

export default function updateDiary(id: number, data: IDiary) {
  return new Promise((resolve, reject) => {
    client
      .put(`/diary/${id}`, data)
      .then(r => resolve(r.data.data))
      .catch(reject);
  });
}
