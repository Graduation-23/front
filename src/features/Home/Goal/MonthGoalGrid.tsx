import {View, StyleSheet} from 'react-native';
import {AppText} from '@/components/AppText';
import {IMonthGoal} from '@type/api';
import WeekGoalGrid from './WeekGoalGrid';
import {Fragment, useEffect} from 'react';
import {useMonthGoalState} from '@/query/goal';
import {useSetRecoilState} from 'recoil';
import treeLevelAtom from '@/atom/treeLevelAtom';
import Utils from '@/utils';

export default function MonthGoalGrid({...month}: IMonthGoal) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {data: monthState} = useMonthGoalState(month.id);

  const setTreeLevel = useSetRecoilState(treeLevelAtom);

  console.log(month);
  useEffect(() => {
    if (month.state === '실패') {
      setTreeLevel(0);
    } else {
      setTreeLevel(Utils.transformTreeLevel());
    }
  }, [month.state, setTreeLevel]);

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
          <AppText
            family="round-b"
            text={month.amount.toLocaleString() + '원'}
          />
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
    height: 40,
  },
});
