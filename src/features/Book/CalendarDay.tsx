import {View} from 'react-native';
import {DateData} from 'react-native-calendars';
import {AppText} from '@components/AppText';

type CalendarItemMetadata = {
  id: number | string;
  cost: number;
  date: DateData;
};

export function CalendarDay({cost, date}: CalendarItemMetadata) {
  return (
    <View>
      <AppText style={{fontSize: 16}} center>
        {date.day}
      </AppText>
      <AppText style={{color: 'red', fontSize: 13}}>
        {cost !== 0 ? `-${cost}` : ''}
      </AppText>
    </View>
  );
}
