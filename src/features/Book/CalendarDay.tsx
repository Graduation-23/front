import {StyleSheet, TouchableOpacity} from 'react-native';
import {DateData} from 'react-native-calendars';
import {AppText} from '@components/AppText';

type CalendarItemMetadata = {
  id: number | string;
  cost: number;
  date: DateData;
  onPress: () => void;
};
function CalendarDay({id, cost, date, onPress}: CalendarItemMetadata) {
  return (
    <TouchableOpacity onPress={onPress}>
      <AppText
        style={[{fontSize: 15}, typeof id === 'string' && styles.disable]}
        center>
        {date.day}
      </AppText>
      <AppText center style={{color: 'red', fontSize: 10}}>
        {cost !== 0 ? `-${cost.toLocaleString()}` : ''}
      </AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  disable: {
    color: 'lightgray',
  },
});

export default CalendarDay;
