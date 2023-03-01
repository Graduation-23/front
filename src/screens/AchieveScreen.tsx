import userAtom from '@/atom/userAtom';
import {AppText} from '@/components/AppText';
import {View, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useRecoilValue} from 'recoil';
import {Image} from 'react-native';
import flower_growings8 from '../assets/growings/flower_growings8.png';
import tree_growings9 from '../assets/growings/tree_growings9.png';
import * as Progress from 'react-native-progress';
import {useAchieve, useMonthAchieve, useWeekAchieve} from '@/query/achieve';

type AchieveScreenProps = {};

export default function AchieveScreen({}: AchieveScreenProps) {
  const user = useRecoilValue(userAtom);
  const {data: wholeAchieve} = useAchieve();
  const {data: monthAchieve} = useMonthAchieve();
  const {data: weekAchieve} = useWeekAchieve();

  return (
    <>
      <SafeAreaView style={styles.Container}>
        <View style={styles.Title}>
          <AppText.Title family="round-b" text={user?.nickname + ' 님이'} />
          <AppText.Title family="round-b" text="달성하신 업적은 " />
          <AppText.Title
            family="round-b"
            text={'총' + wholeAchieve + '개 입니다.'}
          />
          <View style={styles.SubTitle}>
            <AppText family="round-b" text={'월간 : ' + monthAchieve + '개'} />
            <AppText family="round-b" text={'주간 : ' + weekAchieve + '개'} />
          </View>
        </View>
        <View style={styles.Contents}>
          <View>
            <AppText.Title family="round-d" text={'ACHIEVE'} />
          </View>
          <View style={styles.AchieveContainer}>
            <Image
              source={flower_growings8}
              resizeMode="contain"
              style={styles.Image}
            />
            <View style={styles.Bar}>
              <Progress.Bar
                progress={40 / 100}
                width={200}
                height={10}
                color={'#FF0044'}
              />
            </View>
          </View>
          <View style={styles.AchieveContainer}>
            <Image
              source={tree_growings9}
              resizeMode="contain"
              style={styles.Image}
            />
            <View style={styles.Bar}>
              <Progress.Bar
                progress={60 / 100}
                width={200}
                height={10}
                color={'#FF0044'}
              />
            </View>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  Container: {
    alignItems: 'center',
    marginTop: 35,
    height: '100%',
  },
  Title: {
    width: '85%',
    height: '35%',
    paddingHorizontal: 30,
    paddingVertical: 10,
    backgroundColor: '#b2dcff',
    borderRadius: 10,
    marginBottom: 30,
    justifyContent: 'center',
  },
  SubTitle: {
    alignItems: 'flex-end',
  },
  Contents: {
    width: '85%',
    height: '50%',
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 10,
    backgroundColor: '#b2dcff',
    flexDirection: 'column',
  },
  AchieveContainer: {
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  Image: {
    width: 80,
    height: 90,
  },
  Bar: {
    marginLeft: 20,
  },
});
