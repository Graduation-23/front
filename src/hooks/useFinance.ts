import financeAtom from '@/atom/financeAtom';
import {useEffect} from 'react';
import {useRecoilState} from 'recoil';
import {useQueryFinance} from '../query/finance';

export default function useFinance() {
  const [finances, setFinances] = useRecoilState(financeAtom);
  const {data, refetch} = useQueryFinance();

  useEffect(() => {
    if (data) {
      setFinances(data);
    }
  }, [data, setFinances]);

  return {
    finances: finances || [],
    setFinances,
    refetch,
  };
}
