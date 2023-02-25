import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {AppText} from '@/components/AppText';
import {useMonthGoal} from '@/query/goal';
import {IGoal} from '@type/api';
import {useState, useEffect, Fragment} from 'react';
import GoalRegDialog from './GoalRegDialog';
import WeekGoalGrid from './WeekGoalGrid';

export default function MonthGoalGrid() {
  const {data: month} = useMonthGoal();

  const [mState, setMState] = useState('');
  const [mVisible, setMVisible] = useState(false);
  console.log(month);

  const handleMonth = () => {
    setMVisible(!mVisible);
  };

  useEffect(() => {
    if (month !== undefined) {
      if (month[0] !== undefined) {
        switch (month[0].state) {
          case 'proceeding':
            return setMState('진행중');
          case 'success':
            return setMState('성공');
          case 'failed':
            return setMState('실패');
          case 'undefined':
            return setMState('오류');
          default:
            return console.log('아?');
        }
      }
    }
  }, [month]);

  return (
    <>
      {month?.map((mon: IGoal, index: any) => (
        <Fragment key={index}>
          <View style={styles.GridContents}>
            <AppText family="round-b" text="월간" />
            <AppText family="round-b" text={mon.month.toString() + '월'} />
            <AppText family="round-b" text={mon.amount.toString() + '원'} />
            <AppText family="round-b">{mState}</AppText>
          </View>
          <WeekGoalGrid monthId={mon.id} />
        </Fragment>
      ))}
      <View style={styles.Btn}>
        {month !== undefined && month[0] === undefined && (
          <TouchableOpacity onPress={handleMonth}>
            <AppText family="round-b" text="월간목표 등록하기" />
          </TouchableOpacity>
        )}
      </View>

      <GoalRegDialog
        visible={mVisible}
        toggleDialog={handleMonth}
        select="월간"
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
    marginTop: 10,
    height: 100,
  },
});
