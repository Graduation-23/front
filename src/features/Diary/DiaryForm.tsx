import {useNavigation} from '@react-navigation/native';
import {Button} from '@rneui/base';
import {Input} from '@rneui/themed';
import {StyleSheet, View} from 'react-native';
import {IDiary} from '../../../types/api';

import {AppText} from '../../components/AppText';
import {Diary} from '../../constants/screen';
import useEditDiary from '../../hooks/useEditDiary';
import {useUpdateDiary} from '../../query/diary';
import WeatherSelector from '../../components/Weather/WeatherSelector';
import {weatherKorMap} from '../../utils/date';
import ImageUpload from '../../components/ImageUpload';

type DiaryFormProps = {} & IDiary;

export default function DiaryForm(diary: DiaryFormProps) {
  const {mutateAsync: save} = useUpdateDiary();
  const {navigate} = useNavigation<any>();
  const {diary: data, bind} = useEditDiary(diary);

  const handleFinish = () => {
    save(data).then(() => navigate(Diary.Read, {diaryId: data.id}));
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
          text={`날씨 : ${weatherKorMap[data.weather]}`}
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
      <ImageUpload setNewImages={bind('newImages')} />

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
