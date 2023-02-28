import {AppText} from '@/components/AppText';
import {useMonthGoal} from '@/query/goal';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {heads} from './constants';
import {useState} from 'react';
import {useSetRecoilState} from 'recoil';
import treeAtom from '@/atom/treeAtom';
import {TreeImage} from '@/utils/plant';
import GoalRegDialog from './GoalRegDialog';
import MonthGoalGrid from './MonthGoalGrid';

export default function GoalGrid() {
  const {data: monthGoal} = useMonthGoal();
  console.log(monthGoal);

  const [mVisible, setMVisible] = useState(false);

  const [isMonth, setIsMonth] = useState(false);

  const setTree = useSetRecoilState(treeAtom);

  const randomTree = () => {
    const random = Math.floor(Math.random() * TreeImage.length);
    setTree(TreeImage[random]);
  };

  const handleMonth = () => {
    randomTree();
    setIsMonth(!isMonth);
    setMVisible(!mVisible);
  };

  return (
    <>
      <View style={styles.GridContainer}>
        <View style={styles.GridHeaders}>
          {heads.map((head, index) => (
            <View key={index} style={styles.Items}>
              <AppText.Subtitle family="round-b" text={head} />
            </View>
          ))}
        </View>
        {monthGoal && <MonthGoalGrid {...monthGoal} />}
        {!monthGoal && (
          <View style={styles.Btn}>
            <TouchableOpacity onPress={handleMonth}>
              <AppText family="round-b" text="월간목표 등록하기" />
            </TouchableOpacity>
          </View>
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
    height: 35,
  },
  Items: {
    width: '25%',
    alignItems: 'center',
  },
  Btn: {
    marginLeft: 10,
    marginTop: 10,
    height: 100,
  },
});
