import {AppText} from '@/components/AppText';
import {View, StyleSheet} from 'react-native';
import {heads} from './constants';

import MonthGoalGrid from './MonthGoalGrid';

export default function GoalGrid() {
  return (
    <>
      <View style={styles.GridContainer}>
        <View style={styles.GridHeaders}>
          {heads.map((head, index) => (
            <View key={index} style={styles.Items}>
              <AppText.Subtitle family="round-b" text={head} />
            </View>
          ))}
        </View>
        <MonthGoalGrid />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  GridContainer: {
    width: '95%',
    borderColor: '',
    marginBottom: 30,
  },
  GridHeaders: {
    flexGrow: 1,
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'space-around',
    borderBottomWidth: 2,
    borderBottomColor: 'black',
    paddingVertical: 5,
    height: 35,
  },
  Items: {
    width: '25%',
    alignItems: 'center',
  },
});
