import {IMonthGoal} from '@type/api';
import client from '../client';

type Props = {
  year: string;
  month: string;
};

export default function fetchMonthGoal({year, month}: Props) {
  return new Promise<IMonthGoal>((resolve, reject) => {
    client
      .get(`/goal/month/${year}/${month}`)
      .then(response => {
        resolve(response.data.data);
      })
      .catch(reject);
  });
}
