import userAtom from '@/atom/userAtom';
import {AppText} from '@/components/AppText';
import {
  View,
  StyleSheet,
  Platform,
  Image,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useRecoilValue} from 'recoil';
import {useRef, useState} from 'react';
import flower_growings8 from '../assets/growings/flower_growings8.png';
import tree_growings9 from '../assets/growings/tree_growings9.png';
import * as Progress from 'react-native-progress';
import {useMonthAchieve, useWeekAchieve} from '@/query/goal';
import {FlowerImage, TreeImage} from '@/utils/plant';
import ViewShot from 'react-native-view-shot';
import Share from 'react-native-share';
import Icon from 'react-native-vector-icons/MaterialIcons';

type AchieveScreenProps = {};

export default function AchieveScreen({}: AchieveScreenProps) {
  const user = useRecoilValue(userAtom);
  const captureRef = useRef<any>(null);

  const {data: monthAchieve} = useMonthAchieve();
  const {data: weekAchieve} = useWeekAchieve();

  const [all, setAll] = useState(0);

  if (monthAchieve && weekAchieve) {
    setAll(monthAchieve + weekAchieve);
  }

  const onCapture = () => {
    try {
      if (captureRef.current !== undefined) {
        captureRef.current
          ?.capture()
          .then((uri: any) => {
            onShare(uri);
          })
          .catch((err: any) => console.log('Error : ', err));
      }
    } catch {
      (err: any) => console.log(err);
    }
  };

  const onShare = async (uri: any) => {
    try {
      Share.open({
        url: Platform.OS === 'ios' ? `file://${uri}` : uri,
      });
    } catch {}
  };

  return (
    <SafeAreaView style={styles.Container}>
      <ViewShot
        ref={captureRef}
        options={{fileName: 'Capture-File', format: 'jpg', quality: 0.9}}>
        <>
          <View style={styles.Title}>
            <AppText.Title family="round-b" text={user?.nickname + ' 님이'} />
            <AppText.Title
              family="round-b"
              text="달성하신 업적은            "
            />
            <AppText.Title family="round-b" text={'총' + all + '개 입니다.'} />
            <View style={styles.SubTitle}>
              <AppText
                family="round-b"
                text={'월간 : ' + monthAchieve + '개'}
              />
              <AppText family="round-b" text={'주간 : ' + weekAchieve + '개'} />
            </View>
          </View>

          <View style={styles.Contents}>
            <View style={styles.Camera}>
              <AppText.Title family="round-d" text={'ACHIEVE'} />
              <TouchableOpacity onPress={onCapture}>
                <Icon name="photo-camera" size={30} />
              </TouchableOpacity>
            </View>
            <View style={styles.AchieveContainer}>
              <Image
                source={flower_growings8}
                resizeMode="contain"
                style={styles.Image}
              />
              <View style={styles.Bar}>
                <Progress.Bar
                  progress={5 / FlowerImage.length}
                  width={200}
                  height={10}
                  color={'#FF0044'}
                />
                <View style={styles.AlignRight}>
                  <AppText
                    family="round-b"
                    text={'5 / ' + FlowerImage.length}
                  />
                </View>
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
                  progress={6 / TreeImage.length}
                  width={200}
                  height={10}
                  color={'#FF0044'}
                />
                <View style={styles.AlignRight}>
                  <AppText family="round-b" text={'6 / ' + TreeImage.length} />
                </View>
              </View>
            </View>
          </View>
        </>
      </ViewShot>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Container: {
    alignItems: 'center',
    marginTop: 35,
    height: '100%',
    backgroundColor: 'transparent',
  },
  Title: {
    width: '100%',
    height: '35%',
    paddingHorizontal: 30,
    paddingVertical: 10,
    backgroundColor: '#b2dcff',
    borderRadius: 10,
    marginBottom: 30,
    justifyContent: 'center',
    ...Platform.select({
      android: {
        elevation: 30,
      },
    }),
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
    ...Platform.select({
      android: {
        elevation: 30,
      },
    }),
  },
  AchieveContainer: {
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  Camera: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Image: {
    width: 80,
    height: 90,
  },
  Bar: {
    marginLeft: 20,
  },
  AlignRight: {
    alignItems: 'flex-end',
  },
});
