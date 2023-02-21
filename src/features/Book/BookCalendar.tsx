import {useCallback} from 'react';
import {Calendar, DateData} from 'react-native-calendars';
import {CalendarDay} from './CalendarDay';

type CalendarItemPayload = {
  id: number;
  cost: number;
  date: string;
};

interface BookCalendarProps {
  items: CalendarItemPayload[];
}

export default function BookCalendar({items}: BookCalendarProps) {
  // Date 값을 이용해서 items에서 적절한 date를 가져온다.

  const getMetadataByDate = useCallback(
    (targetDate: DateData) => {
      const payload = items.find(el => el.date === targetDate.dateString);
      if (payload) {
        return {...payload, date: targetDate};
      }
      return {id: targetDate.dateString, cost: 0, date: targetDate};
    },
    [items],
  );

  return (
    <Calendar
      hideExtraDays
      dayComponent={({date}) => {
        const metadata = getMetadataByDate(date as any);
        return (
          <CalendarDay
            id={metadata.id}
            cost={metadata.cost}
            date={metadata.date}
          />
        );
      }}
    />
  );
}
