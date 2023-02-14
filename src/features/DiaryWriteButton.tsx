import {Button} from '@rneui/base';
import {useState} from 'react';
import DatePicker from 'react-native-date-picker';
import {AppText} from '../components/AppText';
import {useIssueDiaryId} from '../query/diary';

export default function DiaryWriteButton() {
  const [visible, setVisibleModal] = useState(false);
  const {mutate} = useIssueDiaryId();

  const handleConfirm = () => {
    mutate();
  };

  return (
    <>
      <Button onPress={navigateToWrite}>
        <AppText.Title text="Write" />
      </Button>
      <DatePicker
        title="일기 날짜"
        modal
        mode="date"
        open={visible}
        date={new Date()}
        confirmText="선택"
        cancelText="취소"
        onConfirm={(d): any => {
          setVisibleModal(false);
        }}
        onCancel={() => {
          setVisibleModal(false);
        }}
      />
    </>
  );
}
