import fetchMonthGoal from '@/api/goal/fetchMonthGoal';
import fetchMonthGoalById from '@/api/goal/fetchMonthGoalById';
import fetchMonthGoalState from '@/api/goal/fetchMonthGoalState';
import fetchWeekGoal from '@/api/goal/fetchWeekGoal';
import fetchWeekGoalById from '@/api/goal/fetchWeekGoalById';
import fetchWeekGoalState from '@/api/goal/fetchWeekGoalState';
import requestMonthGoal from '@/api/goal/requestMonthGoal';
import requestWeekGoal from '@/api/goal/requestWeekGoal';
import {useMutation, useQuery, useQueryClient} from 'react-query';
import Utils from '@/utils';
import fetchMonthAchieve from '@/api/goal/fetchMonthAchieve';
import fetchWeekAchieve from '@/api/goal/fetchWeekAchieve';

// 이번달 거 받아오기
export const useMonthGoal = () => {
  const [year, month] = Utils.destructDate(new Date());

  return useQuery(['goal'], () => fetchMonthGoal({year, month}));
};

export const useMonthGoalById = (monthId: number) => {
  return useQuery(['goal', monthId], () => fetchMonthGoalById(monthId), {
    onSuccess: () => {
      //console.log('성공');
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

export const useMonthGoalState = (monthId: number) => {
  const queryClient = useQueryClient();

  return useQuery(['monthGoal', monthId], () => fetchMonthGoalState(monthId), {
    onSuccess: () => {
      queryClient.invalidateQueries('goal');
      console.log('월간 진행도 리셋 성공');
    },
    onError: () => {
      console.log('monthState 조회 실패');
    },
  });
};

export const useMonthAchieve = () => {
  return useQuery([], () => fetchMonthAchieve());
};

export const useWeekGoal = (id: number, enableRefetching: boolean = true) => {
  return useQuery(['goal', id], () => fetchWeekGoal(id), {
    enabled: enableRefetching,
    onSuccess: () => {
      console.log('useWeekGoal 성공');
    },
    onError: () => {
      console.log('useWeekGoal 실패');
    },
  });
};

export const useWeekGoalById = (weekId: number) => {
  return useQuery(['goal', weekId], () => fetchWeekGoalById(weekId), {
    onSuccess: () => {
      console.log('성공');
    },
    onError: () => {
      console.log('??');
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

export const useWeekGoalState = (weekId: number) => {
  const queryClient = useQueryClient();
  return useQuery(['weekGoal', weekId], () => fetchWeekGoalState(weekId), {
    onSuccess: () => {
      queryClient.invalidateQueries(['goal', weekId]);
    },
    onError: () => {
      console.log('weekGoalState 조회 실패');
    },
  });
};

export const useWeekAchieve = () => {
  return useQuery([], () => fetchWeekAchieve());
};
