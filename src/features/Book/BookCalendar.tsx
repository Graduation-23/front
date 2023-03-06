import Utils from '@/utils';
import {useCallback} from 'react';
import {Calendar, DateData, LocaleConfig} from 'react-native-calendars';
import {Platform, StyleSheet, View} from 'react-native';
import CalendarDay from './CalendarDay';

LocaleConfig.locales[''].dayNamesShort = [
  '일',
  '월',
  '화',
  '수',
  '목',
  '금',
  '토',
];

type CalendarItemPayload = {
  id: number;
  cost: number;
  date: string;
};

interface BookCalendarProps {
  items: CalendarItemPayload[];
  setAt(date: Date): void;
  onClickDay(widgetId: number): void;
  at: Date;
}

export default function BookCalendar({
  items,
  at,
  setAt,
  onClickDay,
}: BookCalendarProps) {
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

  const handleDayPress = useCallback(
    (id: number | string) => {
      if (typeof id === 'number') {
        onClickDay(id);
      }
    },
    [onClickDay],
  );

  return (
    <View style={styles.Container}>
      <View style={styles.CalContainer}>
        <Calendar
          style={styles.Cal}
          hideExtraDays
          date={Utils.formatYMD(at)}
          onMonthChange={date => {
            setAt(new Date(date.timestamp));
          }}
          monthFormat="yyyy년 MM월"
          onDayPress={date => {
            console.log(
              '🚀 ~ file: BookCalendar.tsx:57 ~ BookCalendar ~ date:',
              date,
            );
          }}
          dayComponent={({date}) => {
            const metadata = getMetadataByDate(date as any);
            return (
              <CalendarDay
                id={metadata.id}
                cost={metadata.cost}
                date={metadata.date}
                onPress={() => handleDayPress(metadata.id)}
              />
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    alignItems: 'center',
  },
  CalContainer: {
    width: '90%',
  },
  Cal: {
    borderRadius: 10,
    ...Platform.select({
      android: {
        elevation: 20,
      },
    }),
  },
});
