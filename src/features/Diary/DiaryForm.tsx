import {
  Platform,
  StyleSheet,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import {IDiary} from '@type/api';

import {AppText} from '@components/AppText';
import useEditDiary from '@hooks/useEditDiary';
import {useUpdateDiary} from '@query/diary';
import WeatherSelector from '@components/Weather/WeatherSelector';
import {DIARY_IMG_COUNT_LIMIT} from '@constants/img';
import {useMemo} from 'react';
import DiaryEditGallery from './DiaryEditGallery';
import Utils from '@utils/index';

type DiaryFormProps = {} & IDiary;

export default function DiaryForm(diary: DiaryFormProps) {
  const {mutateAsync: save} = useUpdateDiary();

  const {diary: data, set, bind} = useEditDiary(diary);

  const handleFinish = () => {
    save(data).then(() => {
      if (Platform.OS === 'android') {
        ToastAndroid.show('내용이 저장되었습니다!', ToastAndroid.SHORT);
      }
      //console.log(data.imageUrls);
    });
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
      <View style={styles.Top}>
        <AppText.Title
          family="round-d"
          text={`${diary.date.substring(5, 7)}/${diary.date.substring(
            8,
          )} Diary`}
        />
        <WeatherSelector weather={data.weather} setWeather={bind('weather')} />
      </View>
      <View style={styles.fullWidth}>
        <View style={styles.Title}>
          <AppText.Subtitle mv={10} family="round-b" text="제목 : " />
          <TextInput
            value={data.title}
            onChangeText={bind('title')}
            style={styles.input}
            placeholder="제목을 입력해주세요!"
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

        <View style={styles.Contents}>
          <TextInput
            value={data.content}
            onChangeText={bind('content')}
            style={styles.input}
            placeholder="내용을 입력해주세요!"
            multiline
          />
        </View>
      </View>
      <View style={styles.ButtonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleFinish}>
          <AppText family="round-b" text="내용 저장" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    backgroundColor: 'transparent',
    ...Platform.select({
      android: {
        fontFamily: 'Ownglyph_yoxaiov-Rg',
        fontSize: 20,
      },
    }),
  },
  Title: {
    flexDirection: 'row',
  },
  Contents: {
    flexDirection: 'row',
    marginVertical: 20,
  },
  fullWidth: {
    overflow: 'hidden',
    width: '100%',
  },
  container: {
    padding: 10,
  },
  ButtonContainer: {
    alignItems: 'flex-end',
    marginHorizontal: 5,
  },
  button: {
    height: 35,
    width: 120,
    borderRadius: 15,
    backgroundColor: '#f4e284',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
