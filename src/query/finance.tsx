import {useMutation, useQuery, useQueryClient} from 'react-query';
import fetchFinance from '@/api/finance/fetchFinance';
import fetchFinanceById from '@/api/finance/fetchFinanceById';
import createFinance from '@/api/finance/createFinance';
import deleteFinanceById from '@/api/finance/deleteFinanceById';

export const useQueryFinance = () => {
  return useQuery(['finance'], fetchFinance);
};

export const useFinanceById = (id: number) => {
  return useQuery(['finance', id], () => fetchFinanceById(id));
};

export const useCreateFinance = () => {
  const queryClient = useQueryClient();
  return useMutation(['finance'], createFinance, {
    onSuccess: () => queryClient.invalidateQueries('finance'),
  });
};

export const useDeleteFinance = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation(['finance'], deleteFinanceById, {
    onSuccess: () => {
      queryClient.invalidateQueries('finance');
    },
  });
  return mutation;
};
