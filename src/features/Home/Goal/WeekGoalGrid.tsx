import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {AppText} from '@/components/AppText';
import {useWeekGoal, useWeekGoalState} from '@/query/goal';
import {IGoal} from '@type/api';
import {useState} from 'react';
import GoalRegDialog from './GoalRegDialog';
import {FlowerImage} from '@/utils/plant';
import {Image, ImageSourcePropType} from 'react-native';

type WeekGoalGridProps = {
  monthId: number;
  weekId: number;
};

export default function WeekGoalGrid({monthId, weekId}: WeekGoalGridProps) {
  const {data: week} = useWeekGoal(monthId);
  const {data: weekState} = useWeekGoalState(weekId);
  console.log('week :', week);

  const [flower, setFlower] = useState<ImageSourcePropType>();

  const [wVisible, setWVisible] = useState(false);

  const randomFlower = () => {
    const random = Math.floor(Math.random() * FlowerImage.length);
    setFlower(FlowerImage[random]);
  };

  const handleWeek = () => {
    //TODO:꽃 랜덤 지정
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
      <AppText family="round-b" text={weekState?.msg} />
      <View style={styles.Btn}>
        <TouchableOpacity onPress={randomFlower}>
          <AppText>꽃 랜덤</AppText>
        </TouchableOpacity>
        {week !== undefined && week[0] === undefined && (
          <TouchableOpacity onPress={handleWeek}>
            <AppText family="round-b" text="주간목표 등록하기" />
          </TouchableOpacity>
        )}
      </View>
      <Image source={flower} />

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
