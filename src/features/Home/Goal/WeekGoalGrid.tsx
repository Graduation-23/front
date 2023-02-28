import {View, StyleSheet} from 'react-native';
import {AppText} from '@/components/AppText';
import {useWeekGoal} from '@/query/goal';

type WeekGoalGridProps = {
  weekId: number;
};

export default function WeekGoalGrid({weekId}: WeekGoalGridProps) {
  const {data: weeks} = useWeekGoal(weekId);

  return (
    <>
      {weeks && (
        <View style={styles.GridContents}>
          <View style={styles.Items}>
            <AppText family="round-b" text="주간" />
          </View>
          <View style={styles.Items}>
            <AppText family="round-b" text={weeks.toString() + '주차'} />
          </View>
          <View style={styles.Items}>
            <AppText family="round-b" text={weeks.amount.toString() + '원'} />
          </View>
          <View style={styles.Items}>
            <AppText family="round-b" text={weeks.state} />
          </View>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  GridContents: {
    flexGrow: 1,
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 5,
  },
  Btn: {
    marginLeft: 10,
  },
  Items: {
    width: '25%',
    alignItems: 'center',
  },
  Refresh: {
    alignItems: 'flex-end',
    marginRight: 18,
  },
});
