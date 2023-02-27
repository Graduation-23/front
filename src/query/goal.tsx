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
  return useQuery(['goal', id], () => fetchMonthGoalById(id), {
    onSuccess: () => {
      fetchMonthGoalState(id);
    },
  });
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

export const useMonthGoalState = (id: number) => {
  return useQuery(['goal', id], () => fetchMonthGoalState(id));
};

export const useWeekGoal = (
  id: number,
  enableRefetching: boolean = true,
  weekId: number,
) => {
  return useQuery(['goal', id], () => fetchWeekGoal(id), {
    enabled: enableRefetching,
    onSuccess: () => {
      fetchWeekGoalState(weekId)
        .then(() => {
          console.log('성공');
        })
        .catch(() => console.log('실패'));
    },
    onError: () => {
      console.log('useWeekGoal 실패');
    },
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
  return useQuery(['goal', id], () => fetchWeekGoalState(id), {
    onSuccess: () => {
      console.log('weekGoalState 조회 성공');
    },
    onError: () => {
      console.log('weekGoalState 조회 실패');
    },
  });
};
