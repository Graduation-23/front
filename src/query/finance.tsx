import {useMutation, useQuery} from 'react-query';
import fetchFinance from '../api/fetchFinance';
import fetchFinanceById from '../api/fetchFinanceById';
import createFinance from '../api/createFinance';
import deleteFinanceById from '../api/deleteFinanceById';

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

export const useDeleteFinance = () => {
  const mutation = useMutation(deleteFinanceById, {
    onSuccess: () => {
      console.log('카드 삭제 성공');
    },
    onError: () => {
      console.log('카드 삭제 실패');
    },
  });
  return mutation;
};
