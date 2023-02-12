import {useQuery} from 'react-query';
import fetchDiary from '../api/fetchDiary';

export const useDiary = () => {
  return useQuery(['diary-read'], fetchDiary);
};
