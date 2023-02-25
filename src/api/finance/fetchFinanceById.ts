import {IFinance} from '../../../types/api';
import client from '../client';

export default function fetchFinanceById(id: number) {
  return new Promise<IFinance>((resolve, reject) => {
    client
      .get('/finance/' + id)
      .then(response => {
        resolve(response.data);
      })
      .catch(reject);
  });
}
