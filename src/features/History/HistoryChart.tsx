import {AppText} from '@/components/AppText';
import {useMemo} from 'react';
import {Dimensions, Platform, StyleSheet, View} from 'react-native';
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
                color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
                strokeWidth: 2, // optional
              },
            ],
          }
        : null,
    [costByYear],
  );

  return (
    <View style={styles.container}>
      <View style={styles.Center}>
        <View style={styles.Title}>
          <AppText.Title family="round-b">연혁</AppText.Title>
        </View>
        <View style={styles.Chart}>
          {data && (
            <LineChart
              data={data}
              width={Dimensions.get('window').width - 100}
              height={220}
              chartConfig={chartConfig}
              yAxisSuffix="만원"
              style={{borderRadius: 20}}
            />
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 10,
    alignItems: 'center',
  },
  Center: {
    width: '95%',
    backgroundColor: 'white',
    ...Platform.select({
      android: {
        elevation: 10,
      },
    }),
    borderRadius: 20,
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  Title: {
    width: '95%',
    backgroundColor: 'white',
    padding: 10,
    paddingTop: 5,
    borderRadius: 20,
  },
  Chart: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
  },
});
