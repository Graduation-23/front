import {useNavigation} from '@react-navigation/native';
import {Button} from '@rneui/base';
import {useState} from 'react';
import DatePicker from 'react-native-date-picker';
import {AppText} from '../../components/AppText';
import {Diary} from '../../constants/screen';
import {useIssueDiaryId} from '../../query/diary';
import {formatYMD} from '../../utils/date';

export default function DiaryWriteButton() {
  const [visible, setVisibleModal] = useState(false);
  const {navigate} = useNavigation<any>();
  const {mutateAsync: issueId} = useIssueDiaryId();

  const handleConfirm = (d: Date) => {
    issueId(formatYMD(d)).then(id => navigate(Diary.Write, {diaryId: id}));
  };

  return (
    <>
      <Button onPress={() => setVisibleModal(true)}>
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
        onConfirm={d => {
          setVisibleModal(false);
          handleConfirm(d);
        }}
        onCancel={() => {
          setVisibleModal(false);
        }}
      />
    </>
  );
}
