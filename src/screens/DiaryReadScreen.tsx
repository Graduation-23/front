import {
  Dimensions,
  ImageBackground,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import {AppText} from '@components/AppText';
import {useDiaryById} from '@query/diary';
import DiaryPreviewGallery from '@features/Diary/DiaryPreviewGallery';
import WeatherIcon from '@components/Weather/WeatherIcon';
import {WeatherKor} from '@constants/weather';
import {useWidgetById} from '@/query/widget';
import WidgetView from '../features/Widget/View/WidgetView';
import diaryBackground from '../assets/diaryBackground.png';

export default function DiaryReadScreen({route}: any) {
  const diaryId = route.params.diaryId;

  if (!diaryId) {
    throw Error('No Diary Id');
  }

  const {data: diary} = useDiaryById(diaryId);
  const {data: widget} = useWidgetById(diaryId);

  // if (diary) {
  //   console.log('서버 : ', diary?.imageUrls);
  // }

  return (
    <ScrollView>
      <ImageBackground
        source={diaryBackground}
        resizeMode="stretch"
        style={{minHeight: Dimensions.get('window').height}}>
        <View style={styles.container}>
          <View style={styles.Title}>
            <AppText.Title
              mh={10}
              family="round-d"
              text={`${diary?.date.substring(5, 7)}/${diary?.date.substring(
                8,
              )} Diary`}
            />
            <AppText.Subtitle mh={10} family="round-b">
              날씨 : {WeatherKor[diary?.weather || 'sunny']} &nbsp;
              <WeatherIcon type={diary?.weather} />
            </AppText.Subtitle>
          </View>
          <AppText.Subtitle
            mv={10}
            mh={10}
            family="round-b"
            text={`제목 : ${diary?.title}`}
          />
          <DiaryPreviewGallery imageUrls={diary?.imageUrls || []} />
          <AppText.Subtitle
            mv={15}
            mh={10}
            family="round-b"
            text={diary?.content}
            style={styles.TopMargin}
          />
          {widget && (
            <WidgetView items={widget.items} totalCost={widget.totalCost} />
          )}
        </View>
      </ImageBackground>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'white',
    padding: 6,
  },
  Title: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 10,
    paddingTop: 10,
  },
  fullWidth: {
    overflow: 'hidden',
    width: 350,
  },
  container: {
    padding: 15,
    backgroundColor: '#ffffff99',
    minHeight: Dimensions.get('window').height,
  },
  button: {
    borderRadius: 15,
    backgroundColor: '#f4e284',
  },
  weatherIcon: {
    fontSize: 30,
  },
  TopMargin: {
    marginTop: 40,
  },
});
