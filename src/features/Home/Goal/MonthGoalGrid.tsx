import {View, StyleSheet} from 'react-native';
import {AppText} from '@/components/AppText';
import {IMonthGoal} from '@type/api';
import {Fragment} from 'react';
import WeekGoalGrid from './WeekGoalGrid';

export default function MonthGoalGrid({month, weekIds}: IMonthGoal) {
  console.log('month? : ', month, 'weekIds? : ', weekIds);
  return <></>;

  // return (
  //   <>
  //     {month?.map((mon: IMonthGoal, index: any) => (
  //       <Fragment key={index}>
  //         <View style={styles.GridContents}>
  //           <View style={styles.Items}>
  //             <AppText family="round-b" text="월간" />
  //           </View>
  //           <View style={styles.Items}>
  //             <AppText family="round-b" text={mon.month.toString() + '월'} />
  //           </View>
  //           <View style={styles.Items}>
  //             <AppText family="round-b" text={mon.amount.toString() + '원'} />
  //           </View>
  //           <View style={styles.Items}>
  //             <AppText family="round-b" text={mon.state} />
  //           </View>
  //         </View>
  //         {/* <WeekGoalGrid weekId={mon.weekIds} /> */}
  //       </Fragment>
  //     ))}
  //     {weekIds.map((id: number) => (
  //       <WeekGoalGrid weekId={id} key={id} />
  //     ))}
  //   </>
  // );
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
