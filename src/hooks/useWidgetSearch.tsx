import {FetchSearchOptions} from '@/api/widget/fetchWidgetByRange';
import {useWidgetByRange} from '@/query/widget';
import Utils from '@/utils';
import {useState, useLayoutEffect} from 'react';

export default function useWidgetSearch(
  timestamp: number,
  type: 'month' | 'year' = 'month',
) {
  const [options, setOptions] = useState<FetchSearchOptions | null>(null);

  const {data} = useWidgetByRange(options);

  useLayoutEffect(() => {
    if (timestamp && setOptions) {
      const [year, month] = Utils.destructDate(new Date(timestamp));
      const payload = type === 'year' ? {year} : {year, month};
      setOptions({
        type,
        payload,
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
