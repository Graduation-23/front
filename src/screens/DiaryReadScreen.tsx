import {StyleSheet, View} from 'react-native';
import {AppText} from '@components/AppText';
import {useDiaryById} from '@query/diary';
import DiaryPreviewGallery from '@features/Diary/DiaryPreviewGallery';
import WeatherIcon from '@components/Weather/WeatherIcon';
import {WeatherKor} from '@constants/weather';
import {useWidgetById} from '@/query/widget';
import WidgetView from '../features/Widget/View/WidgetView';

export default function DiaryReadScreen({route}: any) {
  const diaryId = route.params.diaryId;

  if (!diaryId) {
    throw Error('No Diary Id');
  }

  const {data: diary} = useDiaryById(diaryId);
  const {data: widget} = useWidgetById(diaryId);

  return (
    <View style={styles.container}>
      <AppText.Title
        center
        family="round-c"
        text={`${diary?.date.slice(5)} 일기`}
      />
      <AppText.Subtitle
        mv={15}
        center
        family="round-c"
        text={`제목 : ${diary?.title}`}
      />
      <AppText.Subtitle mv={10} center family="round-c">
        날씨 : {WeatherKor[diary?.weather || 'sunny']} &nbsp;
        <WeatherIcon type={diary?.weather} />
      </AppText.Subtitle>
      <AppText.Subtitle mv={15} center family="round-c" text="일기 내용" />
      <AppText mv={15} center family="round-c" text={diary?.content} />
      <DiaryPreviewGallery imageUrls={diary?.imageUrls || []} />
      {widget && (
        <WidgetView items={widget.items} totalCost={widget.totalCost} />
      )}
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
