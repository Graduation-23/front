import {
  View,
  StyleSheet,
  TouchableOpacity,
  ToastAndroid,
  Platform,
} from 'react-native';
import {AppText} from '@/components/AppText';
import {useWeekGoalById, useWeekGoalState} from '@/query/goal';
import {useEffect, useState} from 'react';
import GoalRegDialog from './GoalRegDialog';
import Utils from '@/utils';
import {useSetRecoilState} from 'recoil';
import flowerLevelAtom from '@/atom/flowerLevelAtom';

type WeekGoalGridProps = {
  weekId: number;
};

export default function WeekGoalGrid({weekId}: WeekGoalGridProps) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {data: weekState} = useWeekGoalState(weekId);
  const {data: weeks} = useWeekGoalById(weekId);

  const setFlowerLevel = useSetRecoilState(flowerLevelAtom);

  const [wVisible, setWVisible] = useState(false);
  const [visible, setVisible] = useState(true);

  const today = new Date();

  useEffect(() => {
    if (weeks) {
      if (weeks.state === '진행중' && weeks.amount === 0) {
        setVisible(false);
      } else if (weeks.state === '실패') {
        setFlowerLevel(0);
      } else {
        setVisible(true);
      }
    }
  }, [setFlowerLevel, weeks]);

  const handleWeek = () => {
    if (weeks) {
      const [sDay] = Utils.stringToDate(weeks.start);
      const [eDay] = Utils.stringToDate(weeks.end);
      if (
        sDay <= today.getDate() &&
        eDay >= today.getDate() &&
        weeks.amount === 0
      ) {
        setWVisible(!wVisible);
      } else if (sDay <= today.getDate() && eDay >= today.getDate()) {
        if (Platform.OS === 'android') {
          ToastAndroid.show('이미 등록한 목표입니다!', ToastAndroid.SHORT);
        }
      } else {
        if (Platform.OS === 'android') {
          ToastAndroid.show('목표 주간이 아닙니다!', ToastAndroid.SHORT);
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
                {visible ? (
                  <AppText family="round-b" text={weeks.state} />
                ) : (
                  <AppText family="round-b" text="" />
                )}
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
