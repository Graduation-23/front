import {IAchieve} from '@type/api';
import client from '../client';

export default function requestAchieve(title: IAchieve) {
  return new Promise<IAchieve>((resolve, reject) => {
    client
      .post('achieve', {title: title})
      .then(response => {
        resolve(response.data.data);
      })
      .catch(reject);
  });
}
