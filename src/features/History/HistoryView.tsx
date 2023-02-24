import WidgetUtils from '@/utils/widget';
import {Text} from '@rneui/base';
import {useMemo} from 'react';
import {StyleSheet, View} from 'react-native';
import {AppText} from '@/components/AppText';

interface HistoryViewProps {
  widgets: Widget.Type[];
}

export default function HistoryView({widgets}: HistoryViewProps) {
  const costByYear = useMemo(() => {
    const group = WidgetUtils.groupByYear(widgets);

    return Object.entries(group).reduce((acc, [year, items]) => {
      acc.push({
        year,
        cost: items.reduce((acc2, el) => acc2 + el.totalCost, 0),
      });

      return acc;
    }, [] as {year: string; cost: number}[]);
  }, [widgets]);

  return (
    <View style={styles.container}>
      {costByYear.map(({year, cost}) => (
        <View key={year} style={styles.row}>
          <AppText style={styles.item}>{year}년</AppText>
          <AppText style={styles.item}>{cost.toLocaleString()}원</AppText>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  row: {
    flexDirection: 'row',
  },
  item: {
    fontSize: 24,
  },
});
