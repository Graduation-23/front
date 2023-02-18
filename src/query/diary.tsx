import {useMutation, useQuery, useQueryClient} from 'react-query';
import deleteDiary from '@api/deleteDiary';
import fetchDiary from '@api/fetchDiary';
import fetchDiaryById from '@api/fetchDiaryById';
import issueDiary from '@api/issueDiary';
import updateDiary from '@api/updateDiary';

export const useDiary = () => {
  return useQuery(['diary'], fetchDiary);
};

export const useDiaryById = (id: number, enableRefetching: boolean = true) => {
  return useQuery(['diary', id], () => fetchDiaryById(id), {
    enabled: enableRefetching,
  });
};

export const useIssueDiaryId = () => {
  const queryClient = useQueryClient();

  return useMutation(['diary'], issueDiary, {
    onSuccess: () => queryClient.invalidateQueries('diary'),
  });
};

export const useUpdateDiary = () => {
  const queryClient = useQueryClient();

  return useMutation(['diary'], updateDiary, {
    onSuccess: () => queryClient.invalidateQueries('diary'),
  });
};

export const useDeleteDiary = () => {
  const queryClient = useQueryClient();

  return useMutation<unknown, unknown, number>(['diary'], deleteDiary, {
    onSuccess: () => queryClient.invalidateQueries('diary'),
  });
};
