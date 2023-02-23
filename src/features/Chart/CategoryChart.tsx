import {AppText} from '@/components/AppText';
import {CategoryTagColors} from '@/constants/category';
import {useMemo} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {PieChart} from 'react-native-chart-kit';
import WidgetUtils from '../../utils/widget';

function transformGroupToChartData(group: any, getter: (data: any) => any) {
  return Object.entries(group).reduce((acc, cur) => {
    acc.push({
      name: cur[0],
      value: getter(cur[1]),
      color: CategoryTagColors[cur[0]] as string,
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    });
    return acc;
  }, [] as any[]);
}

const chartConfig = {
  backgroundGradientFrom: '#1E2923',
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: '#08130D',
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false, // optional
};

interface CategoryChartProps {
  items: Widget.ItemType[];
}

export default function CategoryChart({items}: CategoryChartProps) {
  const group = useMemo(() => {
    const result: {[key: string]: number} = {};
    const raw = WidgetUtils.groupByCategory(items, el => el.amount);
    Object.entries(raw).forEach(([key, value]) => {
      result[key] = value.reduce((acc, el) => acc + el);
    });
    return result;
  }, [items]);

  const chartDate = useMemo(() => {
    return transformGroupToChartData(group, el => el);
  }, [group]);

  return (
    <View style={styles.container}>
      <AppText.Subtitle style={styles.chartTitle}>
        지출 카테고리 별 통계
      </AppText.Subtitle>
      <PieChart
        data={chartDate}
        chartConfig={chartConfig}
        accessor="value"
        width={Dimensions.get('window').width}
        height={220}
        backgroundColor={'transparent'}
        paddingLeft={'15'}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginTop: 30,
  },
  chartTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#7F7F7F',
    padding: 20,
    paddingBottom: 0,
  },
});
