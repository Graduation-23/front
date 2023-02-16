import {useMutation, useQuery} from 'react-query';
import fetchFinance from '../api/fetchFinance';
import fetchFinanceById from '../api/fetchFinanceById';
import createFinance from '../api/createFinance';

export const useFinance = () => {
  return useQuery(['finance'], fetchFinance);
};

export const useFinanceById = (id: number) => {
  return useQuery(['finance', id], () => fetchFinanceById(id));
};

export const useCreateFinance = () => {
  const mutation = useMutation(createFinance, {
    onSuccess: () => {
      console.log('카드 추가 성공');
    },
    onError: () => {
      console.log('카드 추가 실패');
    },
  });
  return mutation;
};
