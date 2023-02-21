import {View} from 'react-native';
import FinanceItem from './FinanceItem';
import useFinance from '@hooks/useFinance';
import {CashFinance} from '@/constants/finance';

type FinanceViewProps = {
  setFid(tag: number): void;
  fid: number;
};

export default function FinanceView({setFid, fid}: FinanceViewProps) {
  const {finances} = useFinance();

  return (
    <View>
      <FinanceItem
        onClick={() => setFid(0)}
        data={CashFinance}
        selected={fid === 0}
      />
      {finances.map(el => (
        <FinanceItem
          key={el.id}
          onClick={() => setFid(el.id)}
          data={el}
          selected={el.id === fid}
        />
      ))}
    </View>
  );
}
