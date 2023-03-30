import logger from '@/utils/logger';
import {IFinance} from '../../../types/api';
import client from '../client';

export default function deleteFinanceById(financeId: {financeId: number}) {
  return new Promise<IFinance>(resolve => {
    client
      .delete('/finance', {params: financeId})
      .then(res => resolve(res.data))
      .catch(logger.error);
  });
}
