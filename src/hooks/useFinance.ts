import fetchFinance from '@/api/finance/fetchFinance';
import financeAtom from '@/atom/financeAtom';
import {useCallback, useEffect} from 'react';
import {useRecoilState} from 'recoil';

export default function useFinance() {
  const [finances, setFinances] = useRecoilState(financeAtom);

  const refetch = useCallback(() => {
    fetchFinance().then(setFinances);
  }, [setFinances]);

  useEffect(() => {
    if (!finances) {
      refetch();
    }
  }, [finances, refetch]);

  return {
    finances: finances || [],
    setFinances,
    refetch,
  };
}
