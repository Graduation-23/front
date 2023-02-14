import {useNavigation} from '@react-navigation/native';
import {Button} from '@rneui/base';
import {View} from 'react-native';
import {AppText} from '../components/AppText';
import {Diary} from '../constants/screen';
import {useDiaryById} from '../query/diary';

export default function DiaryReadScreen({route}: any) {
  const diaryId = route.params.diaryId;

  if (!diaryId) {
    throw Error('No Diary Id');
  }

  const {navigate} = useNavigation<any>();

  const {data} = useDiaryById(diaryId);

  return (
    <View>
      <Button onPress={() => navigate(Diary.Write, {diaryId})}>수정</Button>
      <AppText.Title>{data?.title}</AppText.Title>
      <AppText>{data?.created}</AppText>
      <AppText>{data?.weather}</AppText>
      <AppText>{data?.content}</AppText>
    </View>
  );
}
