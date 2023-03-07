import {ScrollView} from 'react-native';
import CategoryChart from '../features/Chart/CategoryChart';
import useWidgetSearch from '@/hooks/useWidgetSearch';
import {useMemo} from 'react';
import ChartHeader from '../features/Chart/ChartHeader';
import ChartAmountTable from '@/features/Chart/ChartAmountTable';
import ChartCountTable from '../features/Chart/ChartCountTable';

export default function AccountChartScreen({route: {params}}: any) {
  if (!params) {
    throw new Error('params.timestamp is required');
  }

  const {options, setOptions, data} = useWidgetSearch(
    params.timestamp,
    params.type,
  );

  const items = useMemo(() => {
    if (!data) {
      return [];
    }
    return data.reduce((acc, item) => {
      return acc.concat(item.items);
    }, [] as Widget.ItemType[]);
  }, [data]);

  return (
    <ScrollView>
      <ChartHeader setOptions={setOptions} options={options} />
      <CategoryChart items={items} />
      <ChartAmountTable items={items} />
      <ChartCountTable items={items} />
    </ScrollView>
  );
}
