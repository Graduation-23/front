import {useNavigation} from '@react-navigation/native';
import {Text} from '@rneui/base';
import {useState} from 'react';
import {View} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {Diary} from '@constants/screen';
import {useIssueDiaryId} from '@query/diary';
import {formatYMD} from '@utils/date';
import {useIssueWidget} from '@query/widget';
import WidgetUtils from '@utils/widget';

export default function DiaryWriteButton() {
  const [visible, setVisibleModal] = useState(false);
  const {navigate} = useNavigation<any>();
  const {mutateAsync: issueDiary} = useIssueDiaryId();
  const {mutateAsync: issueWidget} = useIssueWidget();

  const handleConfirm = async (d: Date) => {
    const formatted = formatYMD(d);
    const diaryId = await issueDiary(formatted);
    await issueWidget(WidgetUtils.emptyWidget(diaryId, formatted));
    navigate(Diary.Write, {diaryId});
  };

  return (
    <View>
      <Text style={{color: '#29b6f6'}} onPress={() => setVisibleModal(true)}>
        작성
      </Text>

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
    </View>
  );
}
