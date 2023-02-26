import {ITransaction} from '@type/api';
import client from './client';
import logger from '@utils/logger';

export default function fetchTransactions(date: string) {
  return new Promise<ITransaction[]>(resolve => {
    client
      .get(`/openbank/transactions?date=${date}`)
      .then(response => resolve(response.data.data))
      .catch(logger.error);
  });
}
