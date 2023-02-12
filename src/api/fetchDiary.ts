import {IDiary} from '../../types/api';
import client from './client';

export default function fetchDiary() {
  return new Promise<IDiary[]>((resolve, reject) => {
    client
      .get('/diary')
      .then(response => {
        resolve(response.data.data);
      })
      .catch(reject);
  });
}
