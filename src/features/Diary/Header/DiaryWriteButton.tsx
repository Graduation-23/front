import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {View} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {Diary} from '@constants/screen';
import {useIssueDiaryId} from '@query/diary';
import Utils from '@utils/index';
import {useIssueWidget} from '@query/widget';
import WidgetUtils from '@utils/widget';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function DiaryWriteButton() {
  const [visible, setVisibleModal] = useState(false);
  const {navigate} = useNavigation<any>();
  const {mutateAsync: issueDiary} = useIssueDiaryId();
  const {mutateAsync: issueWidget} = useIssueWidget();

  const handleConfirm = async (d: Date) => {
    const formatted = Utils.formatYMD(d);
    const diaryId = await issueDiary(formatted);
    await issueWidget(WidgetUtils.emptyWidget(diaryId, formatted));
    navigate(Diary.Write, {diaryId});
  };

  return (
    <View>
      <Icon
        name="create"
        size={25}
        onPress={() => setVisibleModal(true)}
        style={{color: '#1393cf'}}
      />

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
