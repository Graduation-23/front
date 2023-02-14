import {StyleSheet, View} from 'react-native';
import DiaryForm from '../features/DiaryForm';
import WidgetForm from '../features/WidgetForm';

export default function DiaryWriteScreen() {
  return (
    <View style={styles.container}>
      <DiaryForm />
      <WidgetForm />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '100%',
    minHeight: '100%',
  },
});
