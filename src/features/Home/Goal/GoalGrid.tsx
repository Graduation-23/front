import {AppText} from '@/components/AppText';
import {useMonthGoal} from '@/query/goal';
import {IGoal} from '@type/api';
import {View, StyleSheet} from 'react-native';
import {bodyDatas, heads} from './constants';
import {useState, useEffect} from 'react';

type GoalGridProps = {};

export default function GoalGrid({}: GoalGridProps) {
  const {data: month} = useMonthGoal();
  //const {data: week} = useWeekGoal();
  const [mState, setMState] = useState('');

  useEffect(() => {
    if (month !== undefined) {
      switch (month[0].state) {
        case 'proceeding':
          return setMState('진행중');
        case 'success':
          return setMState('성공');
        case 'failed':
          return setMState('실패');
        default:
          return setMState('오류');
      }
    }
    // if(week !== undefined) {

    // }
  }, [month]);

  return (
    <>
      {/* <ImageBackground source={backgroundBottom}> */}
      <View style={styles.GridContainer}>
        <View style={styles.GridHeaders}>
          {heads.map((head, index) => (
            <View key={index}>
              <AppText.Subtitle family="round-b" text={head} />
            </View>
          ))}
        </View>
        <View>
          {month?.map((mon: IGoal) => (
            <View key={mon.id} style={styles.GridContents}>
              <AppText family="round-b" text="월간" />
              <AppText family="round-b" text={mon.month.toString() + '월'} />
              <AppText family="round-b" text={mon.amount.toString() + '원'} />
              <AppText family="round-b">{mState}</AppText>
            </View>
          ))}
        </View>

        <View>
          {bodyDatas.map((datas, index) => (
            <View key={index} style={styles.GridContents}>
              {datas.map((week, index2) => (
                <View key={index2} style={styles.GridDatas}>
                  <AppText family="round-b" text={week} />
                </View>
              ))}
            </View>
          ))}
        </View>
      </View>
      {/* </ImageBackground> */}
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
  },
  GridContents: {
    flexGrow: 1,
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'space-around',
    paddingVertical: 5,
    alignItems: 'center',
  },
  GridDatas: {
    width: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
