import {useEffect, useState} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import DiaryForm from '@features/Diary/DiaryForm';
import WidgetForm from '@/features/Widget/Form/WidgetForm';
import {useDiaryById} from '@query/diary';
import {useWidgetById} from '@/query/widget';

export default function DiaryWriteScreen({route}: any) {
  const diaryId = route.params.diaryId;

  if (!diaryId) {
    throw Error('There is no Diary Id');
  }

  const [isData, setIsData] = useState(false);

  const {data: diary} = useDiaryById(diaryId, !isData);
  const {data: widget} = useWidgetById(diaryId, !isData);

  useEffect(() => {
    if (diary && widget) {
      setIsData(true);
    }
  }, [diary, widget, setIsData]);

  return (
    <ScrollView style={styles.container}>
      {diary && <DiaryForm {...diary} />}
      {widget && <WidgetForm {...widget} />}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: '100%',
    minHeight: '100%',
  },
});
