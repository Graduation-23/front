import {AppText} from '@/components/AppText';
import {useMonthGoal} from '@/query/goal';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {heads} from './constants';

import MonthGoalGrid from './MonthGoalGrid';

export default function GoalGrid() {
  const {data: monthGoal} = useMonthGoal();
  console.log(monthGoal);

  // const [mVisible, setMVisible] = useState(false);
  // const [wVisible, setWVisible] = useState(false);

  // const setFlower = useSetRecoilState(flowerAtom);
  // const setTree = useSetRecoilState(treeAtom);

  // const randomFlower = () => {
  //   const random = Math.floor(Math.random() * FlowerImage.length);
  //   setFlower(FlowerImage[random]);
  // };

  // const randomTree = () => {
  //   const random = Math.floor(Math.random() * TreeImage.length);
  //   setTree(TreeImage[random]);
  // };

  // const handleMonth = () => {
  //   randomTree();
  //   setMVisible(!mVisible);
  // };

  // const handleWeek = () => {
  //   randomFlower();
  //   setWVisible(!wVisible);
  // };

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
        {/* {!month && (
          <>
            <View style={styles.Btn}>
              <TouchableOpacity onPress={handleMonth}>
                <AppText family="round-b" text="월간목표 등록하기" />
              </TouchableOpacity>
            </View>

            <View style={styles.Btn}>
              <TouchableOpacity onPress={handleWeek}>
                <AppText family="round-b" text="주간목표 등록하기" />
              </TouchableOpacity>
            </View>
          </>
        )} */}
      </View>

      {/* <GoalRegDialog
        visible={mVisible}
        toggleDialog={handleMonth}
        select="월간"
      />
      <GoalRegDialog
        visible={wVisible}
        toggleDialog={handleWeek}
        select="주간"
      /> */}
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
