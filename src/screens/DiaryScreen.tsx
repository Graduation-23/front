import {StyleProp, ViewStyle} from 'react-native';
import DiaryView from '@features/Diary/DiaryView';
import {SafeAreaView} from 'react-native-safe-area-context';

const KindOfStyle = ['container'] as const;

const styles: {[Key in (typeof KindOfStyle)[number]]: StyleProp<ViewStyle>} = {
  container: {
    backgroundColor: 'white',
    width: '100%',
    minHeight: '100%',
  },
};

export default function DiaryScreen({}: any) {
  return (
    <SafeAreaView style={styles.container}>
      <DiaryView />
    </SafeAreaView>
  );
}
