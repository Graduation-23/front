import fetchGoal from '@/api/goal/fetchGoal';
import fetchGoalById from '@/api/goal/fetchGoalById';
import createGoalWeekly from '@/api/goal/createGoalWeekly';
import createGoalMonthly from '@/api/goal/createGoalMontly';
import {useMutation, useQuery, useQueryClient} from 'react-query';

export const useGoal = () => {
  return useQuery(['goal'], fetchGoal);
};

export const useGoalById = (id: number) => {
  return useQuery(['goal', id], () => fetchGoalById(id));
};

export const useCreateGoalWeekly = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation(createGoalWeekly, {
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

export const useCreateGoalMonthly = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation(createGoalMonthly, {
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
