import logger from '@/utils/logger';
import {IFinance} from '@type/api';
import client from '../client';

export default function fetchFinance() {
  return new Promise<IFinance[]>(res => {
    client
      .get('/finance')
      .then(response => {
        res(response.data.data);
      })
      .catch(logger.error);
  });
}
