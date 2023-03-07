import {AppText} from '@/components/AppText';
import {CategoryTagColors} from '@/constants/category';
import {useMemo} from 'react';
import {Dimensions, Platform, StyleSheet, View} from 'react-native';
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
    <View style={styles.Container}>
      <View style={styles.container}>
        <AppText.Subtitle family="round-b" style={styles.chartTitle}>
          지출 카테고리 별 통계
        </AppText.Subtitle>
        <PieChart
          data={chartDate}
          chartConfig={{
            ...chartConfig,
            propsForLabels: {
              fontSize: 30,
              fontFamily: 'Ownglyph_yoxaiov-Rg',
            },
          }}
          accessor="value"
          width={Dimensions.get('window').width}
          height={220}
          backgroundColor={'transparent'}
          paddingLeft={'15'}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    alignItems: 'center',
  },
  container: {
    width: '90%',
    backgroundColor: 'white',
    marginTop: 5,
    borderRadius: 20,
    ...Platform.select({
      android: {
        elevation: 10,
      },
    }),
  },
  chartTitle: {
    padding: 20,
    paddingBottom: 0,
  },
});
