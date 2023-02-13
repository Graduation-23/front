import {View} from 'react-native';
import {AppText} from '../components/AppText';
import {useDiaryById} from '../query/diary';

export default function DiaryReadScreen({route}: any) {
  if (!route.params.diaryId) {
    throw Error('No Diary Id');
  }

  const {data} = useDiaryById(route.params.diaryId);

  return (
    <View>
      <AppText.Title>{data?.title}</AppText.Title>
      <AppText>{data?.created}</AppText>
      <AppText>{data?.weather}</AppText>
      <AppText>{data?.content}</AppText>
    </View>
  );
}
