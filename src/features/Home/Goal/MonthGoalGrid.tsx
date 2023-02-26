import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {AppText} from '@/components/AppText';
import {useMonthGoal} from '@/query/goal';
import {IGoal} from '@type/api';
import {useState, Fragment} from 'react';
import GoalRegDialog from './GoalRegDialog';
import WeekGoalGrid from './WeekGoalGrid';
import {TreeImage} from '@/utils/plant';
import {Image, ImageSourcePropType} from 'react-native';

export default function MonthGoalGrid() {
  const {data: month} = useMonthGoal();
  const [tree, setTree] = useState<ImageSourcePropType>();

  const [mVisible, setMVisible] = useState(false);
  console.log('month : ', month);

  const randomTree = () => {
    const random = Math.floor(Math.random() * TreeImage.length);
    setTree(TreeImage[random]);
  };

  const handleMonth = () => {
    // TODO:나무 랜덤 지정
    setMVisible(!mVisible);
  };

  return (
    <>
      {month?.map((mon: IGoal, index: any) => (
        <Fragment key={index}>
          <View style={styles.GridContents}>
            <AppText family="round-b" text="월간" />
            <AppText family="round-b" text={mon.month.toString() + '월'} />
            <AppText family="round-b" text={mon.amount.toString() + '원'} />
            <AppText family="round-b" text={mon.state} />
          </View>
          <WeekGoalGrid monthId={mon.id} weekId={mon.weekIds} />
        </Fragment>
      ))}
      <View style={styles.Btn}>
        <TouchableOpacity onPress={randomTree}>
          <AppText>나무 랜덤</AppText>
        </TouchableOpacity>
        {month !== undefined && month[0] === undefined && (
          <TouchableOpacity onPress={handleMonth}>
            <AppText family="round-b" text="월간목표 등록하기" />
          </TouchableOpacity>
        )}
      </View>
      <Image source={tree} />

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
