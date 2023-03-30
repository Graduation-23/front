/* eslint-disable react-native/no-inline-styles */
import Utils from '@/utils';
import WidgetUtils from '@/utils/widget';
import {useMemo, Fragment} from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import {CategoryTagColors} from '@/constants/category';
import {AppText} from '@components/AppText';
import {Divider} from '@rneui/base';

interface ChartAmountTableProps {
  items: Widget.ItemType[];
}

export default function ChartAmountTable({items}: ChartAmountTableProps) {
  const analysis = useMemo(() => {
    const raw = WidgetUtils.groupByCategory(items, el => el.amount);
    const result = Object.entries(raw).reduce((acc, item) => {
      acc.push({
        name: item[0],
        value: item[1].reduce((sum, el) => sum + el, 0),
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
    <View style={styles.Container}>
      <View style={styles.container}>
        <AppText.Subtitle family="round-b" style={styles.title}>
          지출 금액 통계
        </AppText.Subtitle>

        {analysis.map(el => (
          <Fragment key={el.name}>
            <View key={el.name} style={styles.row}>
              <View style={styles.cell}>
                <AppText
                  family="round-d"
                  style={[
                    styles.text,
                    {
                      backgroundColor: CategoryTagColors[el.name],
                      color: 'white',
                    },
                  ]}>
                  {el.ratio} %
                </AppText>
                <AppText family="round-b" style={[styles.text]}>
                  {el.name}
                </AppText>
              </View>

              <AppText family="round-b" style={styles.text}>
                {el.value.toLocaleString()} 원
              </AppText>
            </View>
            <Divider />
          </Fragment>
        ))}
        <View style={[styles.row, {marginTop: 5, paddingHorizontal: 15}]}>
          <AppText family="round-b">총 지출</AppText>
          <AppText family="round-b">
            {analysis
              .reduce((acc, item) => acc + item.value, 0)
              .toLocaleString()}
            원
          </AppText>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    alignItems: 'center',
    marginVertical: 20,
  },
  container: {
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 20,
    ...Platform.select({
      android: {
        elevation: 10,
      },
    }),
    marginTop: 15,
    padding: 10,
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
    padding: 8,
    borderRadius: 7,
    color: 'black',
  },
  title: {
    color: 'black',
    padding: 10,
  },
});
