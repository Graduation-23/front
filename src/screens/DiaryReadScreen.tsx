import {StyleSheet, View} from 'react-native';
import {AppText} from '@components/AppText';
import {useDiaryById} from '@query/diary';
import DiaryPreviewGallery from '@features/Diary/DiaryPreviewGallery';
import WeatherIcon from '@components/Weather/WeatherIcon';
import {WeatherKor} from '@constants/weather';

export default function DiaryReadScreen({route}: any) {
  const diaryId = route.params.diaryId;

  if (!diaryId) {
    throw Error('No Diary Id');
  }

  const {data} = useDiaryById(diaryId);

  return (
    <View style={styles.container}>
      <AppText.Title
        center
        family="round-c"
        text={`${data?.date.slice(5)} 일기`}
      />
      <AppText.Subtitle
        mv={15}
        center
        family="round-c"
        text={`제목 : ${data?.title}`}
      />
      <AppText.Subtitle mv={10} center family="round-c">
        날씨 : {WeatherKor[data?.weather || 'sunny']} &nbsp;
        <WeatherIcon type={data?.weather} />
      </AppText.Subtitle>
      <AppText.Subtitle mv={15} center family="round-c" text="일기 내용" />
      <AppText mv={15} center family="round-c" text={data?.content} />
      <DiaryPreviewGallery imageUrls={data?.imageUrls || []} />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'white',
    padding: 6,
  },
  fullWidth: {
    overflow: 'hidden',
    width: 350,
  },
  container: {
    padding: 15,
  },
  button: {
    borderRadius: 15,
    backgroundColor: '#f4e284',
  },
  weatherIcon: {
    fontSize: 30,
  },
});
