import {StyleProp, View, ViewStyle} from 'react-native';
import DiaryView from '../features/DiaryView';
import DiaryViewHeader from '../features/DiaryViewHeader';

const KindOfStyle = ['container'] as const;

const styles: {[Key in (typeof KindOfStyle)[number]]: StyleProp<ViewStyle>} = {
  container: {
    backgroundColor: 'white',
    width: '100%',
    minHeight: '100%',
  },
};

export default function DiaryScreen({navigation}: any) {
  return (
    <View style={styles.container}>
      <DiaryViewHeader
        navigateToWrite={() => navigation.navigate('DiaryWrite')}
      />
      <DiaryView />
    </View>
  );
}
