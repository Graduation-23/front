import {useMemo} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {LineChart} from 'react-native-chart-kit';

const chartConfig = {
  backgroundGradientFrom: '#fff',
  // backgroundGradientFromOpacity: 0,
  backgroundGradientTo: '#fff',
  // backgroundGradientToOpacity: 0.5,
  color: () => '#000', //(opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 3, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false, // optional
};

interface HistoryChartProps {
  costByYear: {cost: number; year: string}[];
}

export default function HistoryChart({costByYear}: HistoryChartProps) {
  const data = useMemo(
    () =>
      Array.isArray(costByYear) && costByYear.length > 0
        ? {
            labels: costByYear.map(item => item.year),
            datasets: [
              {
                data: costByYear.map(item => item.cost / 10000),
                // color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
                // strokeWidth: 2, // optional
              },
            ],
          }
        : null,
    [costByYear],
  );

  return (
    <View style={styles.container}>
      {data && (
        <LineChart
          data={data}
          width={Dimensions.get('window').width - 30}
          height={220}
          chartConfig={chartConfig}
          yAxisSuffix="만원"
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 15,
  },
});
