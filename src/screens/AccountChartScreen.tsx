import {ScrollView} from 'react-native';
import CategoryChart from '../features/Chart/CategoryChart';
import useWidgetSearch from '@/hooks/useWidgetSearch';
import {useMemo} from 'react';

export default function AccountChartScreen({route: {params}}: any) {
  if (!params) {
    throw new Error('params.timestamp is required');
  }

  const {options, setOptions, data} = useWidgetSearch(params.timestamp);

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
      <CategoryChart options={options} items={items} />
    </ScrollView>
  );
}
