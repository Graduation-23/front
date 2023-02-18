import {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import DiaryForm from '@features/Diary/DiaryForm';
import WidgetForm from '@features/WidgetForm';
import {useDiaryById} from '@query/diary';

export default function DiaryWriteScreen({route}: any) {
  const diaryId = route.params.diaryId;

  if (!diaryId) {
    throw Error('There is no Diary Id');
  }

  const [isData, setIsData] = useState(false);

  const {data} = useDiaryById(diaryId, !isData);

  useEffect(() => {
    if (data) {
      setIsData(true);
    }
  }, [data, setIsData]);

  return (
    <View style={styles.container}>
      {data && <DiaryForm {...data} />}
      <WidgetForm />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: '100%',
    minHeight: '100%',
  },
});
