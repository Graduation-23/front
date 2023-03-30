import checkOpenbank from '@/api/checkOpenbank';
import {useQuery} from 'react-query';

export const useCheckOpenbank = () => {
  return useQuery(['openbank'], checkOpenbank);
};
