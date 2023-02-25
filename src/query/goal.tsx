import fetchMonthGoal from '@/api/goal/fetchMonthGoal';
import fetchMonthGoalById from '@/api/goal/fetchMonthGoalById';
import fetchMonthGoalState from '@/api/goal/fetchMonthGoalState';
import requestMonthGoal from '@/api/goal/requestMonthGoal';
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

// export const useCreateGoalWeekly = () => {
//   const queryClient = useQueryClient();

//   const mutation = useMutation(createGoalWeekly, {
//     onSuccess: () => {
//       queryClient.invalidateQueries('goal');
//       console.log('주간 목표 추가 성공');
//     },
//     onError: () => {
//       console.log('주간 목표 추가 실패');
//     },
//   });
//   return mutation;
// };
