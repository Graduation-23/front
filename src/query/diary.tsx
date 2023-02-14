import {useMutation, useQuery} from 'react-query';
import fetchDiary from '../api/fetchDiary';
import fetchDiaryById from '../api/fetchDiaryById';
import issueDiary from '../api/issueDiary';

export const useDiary = () => {
  return useQuery(['diary-read'], fetchDiary);
};

export const useDiaryById = (id: number) => {
  return useQuery(['diary-read', id], () => fetchDiaryById(id));
};

export const useIssueDiaryId = () => {
  return useMutation(['diary-issue-id'], issueDiary);
};
