import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {AppText} from '@/components/AppText';
import {useMonthGoal} from '@/query/goal';
import {IGoal} from '@type/api';
import {useState, Fragment} from 'react';
import GoalRegDialog from './GoalRegDialog';
import WeekGoalGrid from './WeekGoalGrid';
import {TreeImage} from '@/utils/plant';
import {useSetRecoilState} from 'recoil';
import treeAtom from '@/atom/treeAtom';

export default function MonthGoalGrid() {
  const {data: month} = useMonthGoal();
  const [mVisible, setMVisible] = useState(false);
  //console.log('month : ', month);

  const setTree = useSetRecoilState(treeAtom);

  const randomTree = () => {
    const random = Math.floor(Math.random() * TreeImage.length);
    setTree(TreeImage[random]);
  };

  const handleMonth = () => {
    randomTree();
    setMVisible(!mVisible);
  };

  return (
    <>
      {month?.map((mon: IGoal, index: any) => (
        <Fragment key={index}>
          <View style={styles.GridContents}>
            <View style={styles.Items}>
              <AppText family="round-b" text="월간" />
            </View>
            <View style={styles.Items}>
              <AppText family="round-b" text={mon.month.toString() + '월'} />
            </View>
            <View style={styles.Items}>
              <AppText family="round-b" text={mon.amount.toString() + '원'} />
            </View>
            <View style={styles.Items}>
              <AppText family="round-b" text={mon.state} />
            </View>
          </View>
          <WeekGoalGrid monthId={mon.id} weekId={mon.weekIds} />
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
