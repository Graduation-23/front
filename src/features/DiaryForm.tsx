import {useNavigation} from '@react-navigation/native';
import {Button} from '@rneui/base';
import {Input} from '@rneui/themed';
import {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {IDiary} from '../../types/api';

import {AppText} from '../components/AppText';
import {Diary} from '../constants/screen';
import useEditDiary from '../hooks/useEditDiary';
import {useUpdateDiary} from '../query/diary';
import SpendCategoryDialog from './Category/SpendCategoryDialog';

type DiaryFormProps = {} & IDiary;

export default function DiaryForm(diary: DiaryFormProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  const {mutateAsync: save} = useUpdateDiary();
  const {navigate} = useNavigation<any>();
  const {diary: data, bind} = useEditDiary(diary);

  const handleFinish = () => {
    save(data).then(() => navigate(Diary.Read, {diaryId: data.id}));
  };

  return (
    <View>
      <AppText>{diary.date}일기</AppText>
      <View style={styles.fullWidth}>
        <Input
          value={data.title}
          onChangeText={bind('title')}
          inputStyle={styles.input}
          label={<AppText text="제목" />}
          placeholder="입력..."
        />
        <Input
          value={data.weather}
          onChangeText={bind('weather')}
          inputStyle={styles.input}
          label={<AppText text="날씨" />}
          placeholder="입력..."
        />
        <Input
          value={data.content}
          onChangeText={bind('content')}
          inputStyle={styles.input}
          label={<AppText text="내용" />}
          placeholder="입력..."
        />
      </View>
      <Button onPress={handleFinish}>Edit</Button>
      <Button onPress={() => setOpenId('hello')}>open Di</Button>

      <SpendCategoryDialog
        onConfirm={(id, tag) => {
          console.log(id, tag);
        }}
        close={() => setOpenId(null)}
        openId={openId}
      />
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
});
