import {StyleProp, View, ViewStyle} from 'react-native';
import DiaryView from '../features/Diary/DiaryView';
import DiaryViewHeader from '../features/Diary/DiaryViewHeader';

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
    <View style={styles.container}>
      <DiaryViewHeader />
      <DiaryView />
    </View>
  );
}
