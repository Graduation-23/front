import {useQuery} from 'react-query';
import fetchFinance from '../api/fetchFinance';

export const useFinance = () => {
  return useQuery(['finance-read'], fetchFinance);
};
