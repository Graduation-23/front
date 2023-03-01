import {View, StyleSheet} from 'react-native';
import {AppText} from '@/components/AppText';
import {IMonthGoal} from '@type/api';
import WeekGoalGrid from './WeekGoalGrid';
import {Fragment} from 'react';

export default function MonthGoalGrid({...month}: IMonthGoal) {
  console.log('month? : ', month.month, 'weekIds? : ', month.weekIds);

  return (
    <>
      <View style={styles.GridContents}>
        <View style={styles.Items}>
          <AppText family="round-b" text="월간" />
        </View>
        <View style={styles.Items}>
          <AppText family="round-b" text={month.month + '월'} />
        </View>
        <View style={styles.Items}>
          <AppText family="round-b" text={month.amount + '원'} />
        </View>
        <View style={styles.Items}>
          <AppText family="round-b" text={month.state} />
        </View>
      </View>

      {month.weekIds.map((id: number) => (
        <Fragment key={id}>
          <WeekGoalGrid weekId={id} key={id} />
        </Fragment>
      ))}
    </>
  );
}

const styles = StyleSheet.create({
  GridContents: {
    marginTop: 5,
    flexGrow: 1,
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'space-around',
    paddingVertical: 5,
    alignItems: 'center',
  },
  Btn: {
    marginLeft: 10,
    marginTop: 10,
    height: 100,
  },
  Items: {
    width: '25%',
    alignItems: 'center',
  },
});
