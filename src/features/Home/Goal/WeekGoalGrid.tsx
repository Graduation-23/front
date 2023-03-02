import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {AppText} from '@/components/AppText';
import {useWeekGoalById} from '@/query/goal';
import {useState} from 'react';
import {useSetRecoilState} from 'recoil';
import flowerAtom from '@/atom/flowerAtom';
import {FlowerImage} from '@/utils/plant';
import GoalRegDialog from './GoalRegDialog';

type WeekGoalGridProps = {
  weekId: number;
};

export default function WeekGoalGrid({weekId}: WeekGoalGridProps) {
  const {data: weeks} = useWeekGoalById(weekId);

  const [wVisible, setWVisible] = useState(false);

  const setFlower = useSetRecoilState(flowerAtom);

  const randomFlower = () => {
    const random = Math.floor(Math.random() * FlowerImage.length);
    setFlower(FlowerImage[random]);
  };

  const handleWeek = () => {
    // 날짜
    randomFlower();
    setWVisible(!wVisible);
  };

  console.log(weeks);

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
                <AppText family="round-b" text={weeks.state} />
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
    height: 30,
  },
  Refresh: {
    alignItems: 'flex-end',
    marginRight: 18,
  },
});
