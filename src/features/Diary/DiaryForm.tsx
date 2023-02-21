import {useNavigation} from '@react-navigation/native';
import {Button} from '@rneui/base';
import {Input} from '@rneui/themed';
import {StyleSheet, View} from 'react-native';
import {IDiary} from '@type/api';

import {AppText} from '@components/AppText';
import {Diary} from '@constants/screen';
import useEditDiary from '@hooks/useEditDiary';
import {useUpdateDiary} from '@query/diary';
import WeatherSelector from '@components/Weather/WeatherSelector';
import {WeatherKor} from '@constants/weather';
import {DIARY_IMG_COUNT_LIMIT} from '@constants/img';
import {useMemo} from 'react';
import DiaryEditGallery from './DiaryEditGallery';
import Utils from '@utils/index';

type DiaryFormProps = {} & IDiary;

export default function DiaryForm(diary: DiaryFormProps) {
  const {mutateAsync: save} = useUpdateDiary();
  const {navigate} = useNavigation<any>();
  const {diary: data, set, bind} = useEditDiary(diary);

  const handleFinish = () => {
    save(data).then(() => navigate(Diary.Read, {diaryId: data.id}));
  };

  const previewImages = useMemo(
    () => [...data.imageUrls, ...data.newImages.map(el => el.uri)],
    [data.imageUrls, data.newImages],
  );

  const removeImage = (imageUrl: string) => {
    let idx = -1;
    if ((idx = data.imageUrls.indexOf(imageUrl)) > -1) {
      set('imageUrls', Utils.removeElementByIndex(data.imageUrls, idx));
    } else if (
      (idx = data.newImages.findIndex(el => el.uri === imageUrl)) > -1
    ) {
      set('newImages', Utils.removeElementByIndex(data.newImages, idx));
    }
  };

  return (
    <View style={styles.container}>
      <AppText.Title
        center
        family="round-c"
        text={`${diary.date.slice(5)} 일기`}
      />
      <View style={styles.fullWidth}>
        <Input
          value={data.title}
          onChangeText={bind('title')}
          inputStyle={styles.input}
          label={
            <AppText.Subtitle mv={15} center family="round-c" text="제목" />
          }
          placeholder="제목 입력..."
        />
        <AppText.Subtitle
          mv={10}
          center
          family="round-c"
          text={`날씨 : ${WeatherKor[data.weather]}`}
        />
        <WeatherSelector weather={data.weather} setWeather={bind('weather')} />
        <Input
          value={data.content}
          onChangeText={bind('content')}
          inputStyle={styles.input}
          label={
            <AppText.Subtitle
              mv={15}
              center
              family="round-c"
              text="일기 내용"
            />
          }
          placeholder="내용 입력..."
        />
      </View>

      <DiaryEditGallery
        removeImage={removeImage}
        selectLimit={DIARY_IMG_COUNT_LIMIT - data.imageUrls.length}
        previewImagesUrls={previewImages}
        appendNewImages={newImages =>
          set('newImages', [...data.newImages, ...newImages])
        }
      />

      <Button buttonStyle={styles.button} onPress={handleFinish}>
        작성 완료
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    // margin: 10,
    backgroundColor: 'white',
    padding: 6,
  },
  fullWidth: {
    overflow: 'hidden',
    width: 350,
  },
  container: {
    padding: 15,

    // display: 'flex',
    // justifyContent: 'center',
  },
  button: {
    borderRadius: 15,
    backgroundColor: '#f4e284',
  },
});
