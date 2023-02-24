import {IFinance} from '../../../types/api';
import client from '../client';

export default function deleteFinanceById(financeId: {financeId: number}) {
  return new Promise<IFinance>((resolve, reject) => {
    client
      .delete('/finance', {params: financeId})
      .then(res => resolve(res.data))
      .catch(reject);
  });
}
