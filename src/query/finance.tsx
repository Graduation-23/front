import {useMutation, useQuery, useQueryClient} from 'react-query';
import fetchFinance from '@/api/finance/fetchFinance';
import fetchFinanceById from '@/api/finance/fetchFinanceById';
import createFinance from '@/api/finance/createFinance';
import deleteFinanceById from '@/api/finance/deleteFinanceById';
import financeAtom from '@/atom/financeAtom';
import {useSetRecoilState} from 'recoil';

export const useFinance = () => {
  const setFinance = useSetRecoilState(financeAtom);

  return useQuery(['finance'], fetchFinance, {
    onSuccess: (data: any) => {
      setFinance(data);
    },
  });
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
  const queryClient = useQueryClient();

  const mutation = useMutation(['finance'], deleteFinanceById, {
    onSuccess: () => {
      queryClient.invalidateQueries('finance');
      console.log('카드 삭제 성공');
    },
    onError: () => {
      console.log('카드 삭제 실패');
    },
  });
  return mutation;
};
