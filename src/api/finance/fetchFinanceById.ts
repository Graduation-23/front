import logger from '@/utils/logger';
import {IFinance} from '../../../types/api';
import client from '../client';

export default function fetchFinanceById(id: number) {
  return new Promise<IFinance>(resolve => {
    client
      .get('/finance/' + id)
      .then(response => {
        resolve(response.data);
      })
      .catch(logger.error);
  });
}
