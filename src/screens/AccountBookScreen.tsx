import BookCalendar from '@/features/Book/BookCalendar';
import {useMemo, useState, useEffect} from 'react';
import {ScrollView} from 'react-native';
import {useWidgetWithDate} from '../query/widget';
import AnalysisCost from '../features/Book/AnalysisCost';
import BookWidget from '@/features/Book/BookWidget';

const currentDate = new Date();

export default function AccountBookScreen() {
  const [at, setAt] = useState(currentDate);
  const {data: widgets, refetch} = useWidgetWithDate(at);
  const [focusedWidgetId, setFocusedWidgetId] = useState(0);

  useEffect(() => {
    refetch();
  }, [at, refetch]);

  const metadata = useMemo(() => {
    return (
      widgets?.map(el => ({
        id: el.id,
        cost: el.totalCost,
        date: el.date,
      })) || []
    );
  }, [widgets]);

  return (
    <ScrollView>
      <AnalysisCost items={widgets || []} at={at} />
      <BookCalendar
        items={metadata}
        at={at}
        setAt={setAt}
        onClickDay={setFocusedWidgetId}
      />
      {focusedWidgetId !== 0 && <BookWidget id={focusedWidgetId} />}
    </ScrollView>
  );
}
