import HistoryChart from '@/features/History/HistoryChart';
import HistoryView from '@/features/History/HistoryView';
import {useWidgets} from '@/query/widget';
import WidgetUtils from '@/utils/widget';
import {useMemo} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import BookHistoryHeader from '../features/History/BookHistoryHeader';

interface AccountHistoryProps {}

export default function AccountHistoryScreen({}: AccountHistoryProps) {
  const {data} = useWidgets();

  const costByYear = useMemo(() => {
    if (data) {
      const group = WidgetUtils.groupByYear(data);

      return Object.entries(group).reduce((acc, [year, items]) => {
        acc.push({
          year,
          cost: items.reduce((acc2, el) => acc2 + el.totalCost, 0),
        });

        return acc;
      }, [] as {year: string; cost: number}[]);
    }
    return [];
  }, [data]);

  return (
    <ScrollView style={styles.container}>
      <BookHistoryHeader />
      <HistoryChart costByYear={costByYear} />
      <HistoryView costByYear={costByYear} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    // minHeight: '100%',
    // backgroundColor: '#fff',
  },
});
