import logger from '@/utils/logger';
import client from '../client';

type CFinance = {
  type: string;
  description: string;
  anothername: string;
  colorcode: string;
};

export default function createFinance({
  type,
  description,
  anothername,
  colorcode,
}: CFinance) {
  return new Promise(res => {
    client
      .post('/finance/add', {type, description, anothername, colorcode})
      .then(v => {
        res(v);
      })
      .catch(logger.error);
  });
}
