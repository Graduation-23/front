import {
  View,
  StyleSheet,
  TouchableOpacity,
  ToastAndroid,
  Platform,
} from 'react-native';
import {AppText} from '@/components/AppText';
import {useWeekGoalById} from '@/query/goal';
import {useState} from 'react';
import GoalRegDialog from './GoalRegDialog';
import Utils from '@/utils';

type WeekGoalGridProps = {
  weekId: number;
};

export default function WeekGoalGrid({weekId}: WeekGoalGridProps) {
  const {data: weeks} = useWeekGoalById(weekId);
  const [wVisible, setWVisible] = useState(false);

  const today = new Date();

  const handleWeek = () => {
    if (weeks) {
      const [sDay] = Utils.stringToDate(weeks.start);
      const [eDay] = Utils.stringToDate(weeks.end);
      if (sDay <= today.getDate() && eDay >= today.getDate()) {
        setWVisible(!wVisible);
      } else {
        if (Platform.OS === 'android') {
          ToastAndroid.show('아직 목표 주간이 아닙니다!', ToastAndroid.SHORT);
        }
      }
    }
  };

  return (
    <>
      {weeks && (
        <>
          <TouchableOpacity onPress={handleWeek}>
            <View style={styles.GridContents}>
              <View style={styles.Items}>
                <AppText family="round-b" text="주간" />
              </View>
              <View style={styles.Items}>
                <AppText family="round-b" text={weeks.week + '주차'} />
              </View>
              <View style={styles.Items}>
                <AppText family="round-b" text={weeks.amount + '원'} />
              </View>
              <View style={styles.Items}>
                <AppText family="round-b" text={weeks.state} />
              </View>
            </View>
          </TouchableOpacity>
          <GoalRegDialog
            visible={wVisible}
            toggleDialog={handleWeek}
            select="주간"
            weekId={weeks.id}
          />
        </>
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
    height: 40,
  },
  Refresh: {
    alignItems: 'flex-end',
    marginRight: 18,
  },
});
