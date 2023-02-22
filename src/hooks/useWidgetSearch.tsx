import {FetchSearchOptions} from '@/api/widget/fetchWidgetByRange';
import {useWidgetByRange} from '@/query/widget';
import Utils from '@/utils';
import {useState, useLayoutEffect} from 'react';

export default function useWidgetSearch(timestamp: number) {
  const [options, setOptions] = useState<FetchSearchOptions | null>(null);

  const {data} = useWidgetByRange(options);

  useLayoutEffect(() => {
    if (timestamp && setOptions) {
      const [year, month] = Utils.destructDate(new Date(timestamp));
      setOptions({
        type: 'month',
        payload: {
          year,
          month,
        },
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timestamp]);

  return {
    options,
    setOptions,
    data,
  };
}
