import fetchAchieve from '@/api/achieve/fetchAchieve';
import fetchMonthAchieve from '@/api/achieve/fetchMonthAchieve';
import fetchWeekAchieve from '@/api/achieve/fetchWeekAchieve';
import requestAchieve from '@/api/achieve/requestAchieve';
import {useMutation, useQuery, useQueryClient} from 'react-query';

export const useAchieve = () => {
  return useQuery(['achieve'], () => fetchAchieve());
};

export const useMonthAchieve = () => {
  return useQuery(['month'], () => fetchMonthAchieve());
};

export const useWeekAchieve = () => {
  return useQuery(['week'], () => fetchWeekAchieve());
};

export const useRequestAchieve = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation(requestAchieve, {
    onSuccess: () => {
      queryClient.invalidateQueries('achieve');
      console.log('업적 추가 성공');
    },
    onError: () => {
      console.log('업적 추가 실패');
    },
  });
  return mutation;
};
