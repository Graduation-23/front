import BookCalendar from '@/features/Book/BookCalendar';
import {useMemo} from 'react';
import {ScrollView} from 'react-native';
import {useWidget} from '../query/widget';

export default function AccountBookScreen() {
  const {data: widgets} = useWidget('all');

  const metadata = useMemo(() => {
    if (widgets) {
      return widgets.map(el => ({
        id: el.id,
        cost: el.totalCost,
        date: el.date,
      }));
    }
  }, [widgets]);

  return (
    <ScrollView>{metadata && <BookCalendar items={metadata} />}</ScrollView>
  );
}
