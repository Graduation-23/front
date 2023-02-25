import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {AppText} from '@/components/AppText';
import {useWeekGoal} from '@/query/goal';
import {IGoal} from '@type/api';
import {useState, useEffect} from 'react';
import GoalRegDialog from './GoalRegDialog';

export default function WeekGoalGrid({monthId}: any) {
  const {data: week} = useWeekGoal(monthId);

  const [wState, setWState] = useState('');
  const [wVisible, setWVisible] = useState(false);

  const handleWeek = () => {
    setWVisible(!wVisible);
  };

  useEffect(() => {
    if (week !== undefined) {
      if (week[0] !== undefined) {
        switch (week[0].state) {
          case 'proceeding':
            return setWState('진행중');
          case 'success':
            return setWState('성공');
          case 'failed':
            return setWState('실패');
          case 'undefined':
            return setWState('오류');
          default:
            return console.log('아?');
        }
      }
    }
  }, [week]);
  return (
    <>
      {week?.map((we: IGoal, index) => (
        <View key={we.id} style={styles.GridContents}>
          <AppText family="round-b" text="주간" />
          <AppText family="round-b" text={index + 1 + '주차'} />
          <AppText family="round-b" text={we.amount.toString() + '원'} />
          <AppText family="round-b">{wState}</AppText>
        </View>
      ))}
      <View style={styles.Btn}>
        {week !== undefined && week[0] === undefined && (
          <TouchableOpacity onPress={handleWeek}>
            <AppText family="round-b" text="주간목표 등록하기" />
          </TouchableOpacity>
        )}
      </View>

      <GoalRegDialog
        visible={wVisible}
        toggleDialog={handleWeek}
        select="주간"
      />
    </>
  );
}

const styles = StyleSheet.create({
  GridContents: {
    flexGrow: 1,
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'space-around',
    paddingVertical: 5,
    alignItems: 'center',
  },
  Btn: {
    marginLeft: 10,
  },
});
