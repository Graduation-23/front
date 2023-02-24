import {AppText} from '@/components/AppText';

import {StyleSheet, View} from 'react-native';

interface BookHistoryHeaderProps {}

export default function BookHistoryHeader({}: BookHistoryHeaderProps) {
  return (
    <View style={styles.container}>
      <AppText style={styles.yearText}>연혁</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    backgroundColor: '#fff',
  },
  yearText: {
    color: 'gray',
    fontWeight: 'bold',
    fontSize: 24,
    paddingLeft: 20,
  },
});
