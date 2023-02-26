import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {AppText} from '@/components/AppText';
import {useWeekGoal} from '@/query/goal';
import {IGoal} from '@type/api';
import {useState} from 'react';
import GoalRegDialog from './GoalRegDialog';
import {FlowerImage} from '@/utils/plant';
import {useSetRecoilState} from 'recoil';
import flowerAtom from '@/atom/flowerAtom';

type WeekGoalGridProps = {
  monthId: number;
  weekId: number;
};

export default function WeekGoalGrid({monthId}: WeekGoalGridProps) {
  const {data: week} = useWeekGoal(monthId);
  //const {data: weekState} = useWeekGoalState(weekId);
  //console.log('week :', week);
  const [wVisible, setWVisible] = useState(false);

  const setFlower = useSetRecoilState(flowerAtom);

  const randomFlower = () => {
    const random = Math.floor(Math.random() * FlowerImage.length);
    setFlower(FlowerImage[random]);
  };

  const handleWeek = () => {
    randomFlower();
    setWVisible(!wVisible);
  };

  return (
    <>
      {week?.map((we: IGoal, index) => (
        <View key={we.id} style={styles.GridContents}>
          <AppText family="round-b" text="주간" />
          <AppText family="round-b" text={index + 1 + '주차'} />
          <AppText family="round-b" text={we.amount.toString() + '원'} />
          <AppText family="round-b" text={we.state} />
        </View>
      ))}
      <View style={styles.Btn}>
        {week !== undefined && week[0] === undefined && (
          <TouchableOpacity onPress={handleWeek}>
            <AppText family="round-b" text="주간목표 등록하기" />
          </TouchableOpacity>
        )}
      </View>
      {/* <Image source={flower} /> */}

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
