import {IFinance} from '@type/api';
import client from '../client';

export default function fetchFinance() {
  return new Promise<IFinance[]>((res, rej) => {
    client
      .get('/finance')
      .then(response => {
        res(response.data.data);
        console.log(response.data.data[0].anothername);
      })
      .catch(rej);
  });
}
