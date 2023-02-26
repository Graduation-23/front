import fetchMonthGoal from '@/api/goal/fetchMonthGoal';
import fetchMonthGoalById from '@/api/goal/fetchMonthGoalById';
import fetchMonthGoalState from '@/api/goal/fetchMonthGoalState';
import fetchWeekGoal from '@/api/goal/fetchWeekGoal';
import fetchWeekGoalState from '@/api/goal/fetchWeekGoalState';
import requestMonthGoal from '@/api/goal/requestMonthGoal';
import requestWeekGoal from '@/api/goal/requestWeekGoal';
import {useMutation, useQuery, useQueryClient} from 'react-query';

export const useMonthGoal = () => {
  return useQuery(['goal'], fetchMonthGoal);
};

export const useMonthGoalById = (id: number) => {
  return useQuery(['goal', id], () => fetchMonthGoalById(id));
};

export const useRequestMonthGoal = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation(requestMonthGoal, {
    onSuccess: () => {
      queryClient.invalidateQueries('goal');
      console.log('월간 목표 추가 성공');
    },
    onError: () => {
      console.log('월간 목표 추가 실패');
    },
  });
  return mutation;
};

export const useMonthGoalState = () => {
  return useQuery(['goal'], () => fetchMonthGoalState);
};

export const useWeekGoal = (id: number, enableRefetching: boolean = true) => {
  return useQuery(['goal', id], () => fetchWeekGoal(id), {
    enabled: enableRefetching,
  });
};

export const useRequestWeekGoal = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation(requestWeekGoal, {
    onSuccess: () => {
      queryClient.invalidateQueries('goal');
      console.log('주간 목표 추가 성공');
    },
    onError: () => {
      console.log('주간 목표 추가 실패');
    },
  });
  return mutation;
};

export const useWeekGoalState = (id: number) => {
  return useQuery(['goal', id], () => fetchWeekGoalState(id));
};
