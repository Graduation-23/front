import {IAchieve} from '@type/api';
import client from '../client';

export default function fetchAchieve() {
  return new Promise<IAchieve[]>((resolve, reject) => {
    client
      .get('/achieve')
      .then(response => {
        resolve(response.data.data);
        console.log('와 : ', response.data.data);
      })
      .catch(reject);
  });
}
