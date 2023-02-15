import {useMutation, useQuery} from 'react-query';
import deleteDiary from '../api/deleteDiary';
import fetchDiary from '../api/fetchDiary';
import fetchDiaryById from '../api/fetchDiaryById';
import issueDiary from '../api/issueDiary';
import updateDiary from '../api/updateDiary';

export const useDiary = () => {
  return useQuery(['diary-read'], fetchDiary);
};

export const useDiaryById = (id: number, enableRefetching: boolean = true) => {
  return useQuery(['diary-read', id], () => fetchDiaryById(id), {
    enabled: enableRefetching,
  });
};

export const useIssueDiaryId = () => {
  return useMutation(['diary-issue-id'], issueDiary);
};

export const useUpdateDiary = () => {
  return useMutation(['diary-update'], updateDiary);
};

export const useDeleteDiary = () => {
  return useMutation<unknown, unknown, number>(['diary-delete', deleteDiary]);
};
