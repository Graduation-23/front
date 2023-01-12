import {Text} from '@rneui/base';
import {View} from 'react-native';
import {Calendar} from 'react-native-calendars';

export default function HomeScreen() {
  return (
    <Calendar
      dayComponent={({date, state}) => {
        return (
          <View>
            <Text
              style={{
                textAlign: 'center',
                color: state === 'disabled' ? 'gray' : 'black',
              }}>
              {date && date.day}
            </Text>
            <Text style={{fontSize: 10, color: 'red'}}>1원</Text>
          </View>
        );
      }}></Calendar>
  );
}
