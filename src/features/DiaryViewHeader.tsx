import {Button} from '@rneui/base';
import {View} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {AppText} from '../components/AppText';

type DiaryViewHeaderProps = {
  navigateToWrite(): void;
};

export default function DiaryViewHeader({
  navigateToWrite,
}: DiaryViewHeaderProps) {
  return (
    <View>
      <Button onPress={navigateToWrite}>
        <AppText.Title text="Write" />
      </Button>
      <DatePicker
        title="일기 날짜"
        modal
        mode="date"
        open={visible}
        date={date}
        confirmText="선택"
        cancelText="취소"
        onConfirm={(d): any => {
          setVisible(false);
          setDate(d);
        }}
        onCancel={() => {
          setVisible(false);
        }}
        onDateChange={d => {
          console.log(d);
        }}
      />
    </View>
  );
}
