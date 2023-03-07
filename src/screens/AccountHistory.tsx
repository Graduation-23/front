import HistoryChart from '@/features/History/HistoryChart';
import HistoryView from '@/features/History/HistoryView';
import {useWidgets} from '@/query/widget';
import WidgetUtils from '@/utils/widget';
import {useMemo} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

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
    <SafeAreaView style={styles.height}>
      <ScrollView>
        <View style={styles.container}>
          <HistoryChart costByYear={costByYear} />
          <HistoryView costByYear={costByYear} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  height: {
    height: '100%',
  },
  container: {
    // minHeight: '100%',
    // backgroundColor: '#fff',
    width: '100%',
  },
});
