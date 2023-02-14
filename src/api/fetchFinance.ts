import {IFinance} from '../../types/api';
import client from './client';

export default function fetchFinance() {
  return new Promise<IFinance[]>((res, rej) => {
    client
      .get('/finance')
      .then(response => {
        res(response.data.data);
        console.log('?');
      })
      .catch(rej);
  });
}
