import {useEffect, useState} from 'react';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  View,
} from 'react-native';
import DiaryForm from '@features/Diary/DiaryForm';
import WidgetForm from '@/features/Widget/Form/WidgetForm';
import {useDiaryById} from '@query/diary';
import {useWidgetById} from '@/query/widget';
import diaryBackground from '../assets/diaryBackground.png';

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
      <ImageBackground
        source={diaryBackground}
        resizeMode="stretch"
        style={{
          minHeight: Dimensions.get('window').height,
          minWidth: Dimensions.get('window').width,
        }}>
        <KeyboardAvoidingView
          style={{flex: 1}}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
          <View style={styles.FormContainer}>
            {diary && <DiaryForm {...diary} />}
            {widget && <WidgetForm {...widget} />}
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff99',
    minWidth: '100%',
    minHeight: '100%',
  },
  FormContainer: {
    padding: 15,
  },
});
