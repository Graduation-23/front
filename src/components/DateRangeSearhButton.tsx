import {Text} from '@rneui/base';
import {useState} from 'react';
import {View} from 'react-native';
import DatePicker from 'react-native-date-picker';
import Icon from 'react-native-vector-icons/MaterialIcons';

export type RangeDate = [start: Date, end: Date];

interface DateRangeSearchButtonProps {
  range: RangeDate;
  setRange(range: RangeDate): void;
  onRangeConfirm(range: RangeDate): void;
}

export default function DateRangeSearchButton({
  range,
  setRange,
  onRangeConfirm,
}: DateRangeSearchButtonProps) {
  const [visible, setVisible] = useState(false);
  const [count, setCount] = useState(0);

  const handleOpen = () => {
    console.log(count, visible);
    setCount(0);
    setVisible(true);
  };

  const handleConfirm = (date: Date) => {
    const newRangeDate: RangeDate = [...range];
    newRangeDate[count] = date;
    setRange(newRangeDate);
    console.log(count);
    if (count < 1) {
      setCount(count + 1); // don't use prev value!
    } else {
      console.log('h');
      setCount(0);
      setVisible(false);
      onRangeConfirm(newRangeDate);
    }
  };

  return (
    <View>
      <Text onPress={handleOpen}>
        <Icon size={30} name="search" />
      </Text>

      <DatePicker
        title={count === 0 ? '시작 날짜' : '마지막 날짜'}
        modal
        mode="date"
        open={visible}
        date={range[count]}
        confirmText="선택"
        cancelText="취소"
        onConfirm={handleConfirm}
        onCancel={() => setVisible(false)}
      />
    </View>
  );
}
