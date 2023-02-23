import Utils from '@/utils';
import WidgetUtils from '@/utils/widget';
import {useMemo, Fragment} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {CategoryTagColors} from '@/constants/category';
import {AppText} from '@components/AppText';
import {Divider} from '@rneui/base';

interface ChartCountTableProps {
  items: Widget.ItemType[];
}

export default function ChartCountTable({items}: ChartCountTableProps) {
  const analysis = useMemo(() => {
    const raw = WidgetUtils.groupByCategory(items, el => el.amount);
    const result = Object.entries(raw).reduce((acc, item) => {
      acc.push({
        name: item[0],
        value: item[1].length,
        ratio: '0',
      });
      return acc;
    }, [] as {name: string; value: number; ratio: string}[]);
    Utils.transformPercent(result.map(el => el.value)).forEach((el, i) => {
      result[i].ratio = el;
    });
    return result;
  }, [items]);

  return (
    <View style={styles.container}>
      <AppText style={styles.title}>지출 횟수 통계</AppText>
      {analysis.map(el => (
        <Fragment key={el.name}>
          <View key={el.name} style={styles.row}>
            <View style={styles.cell}>
              <Text
                style={[
                  styles.text,
                  {backgroundColor: CategoryTagColors[el.name], color: 'white'},
                ]}>
                {el.ratio}%
              </Text>
              <Text style={[styles.text]}>{el.name}</Text>
            </View>
            <View style={styles.cell}>
              <Text style={styles.text}>{el.value.toLocaleString()}회</Text>
            </View>
          </View>
          <Divider />
        </Fragment>
      ))}
      <View style={[styles.row, {marginTop: 5}]}>
        <AppText>총 지출 횟수</AppText>
        <AppText>
          {analysis.reduce((acc, item) => acc + item.value, 0).toLocaleString()}
          회
        </AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginTop: 30,
  },
  row: {
    flexDirection: 'row',
    padding: 10,

    justifyContent: 'space-between',
  },
  cell: {
    flexDirection: 'row',
  },
  text: {
    fontSize: 18,
    padding: 8,
    borderRadius: 7,
    color: 'black',
  },
  title: {padding: 15, color: 'gray'},
});
