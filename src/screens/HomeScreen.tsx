/* eslint-disable react-native/no-inline-styles */
import {useRef} from 'react';
import {
  Platform,
  StyleSheet,
  View,
  ScrollView,
  ImageBackground,
  Dimensions,
} from 'react-native';
import {AppText} from '../components/AppText';
import GrowingPlant from '../features/Home/GrowingPlant';
import ViewShot from 'react-native-view-shot';
import Share from 'react-native-share';
import GoalGrid from '@/features/Home/Goal/GoalGrid';
import backgroundImage from '../assets/backgroundImage.jpg';
import {useRecoilValue} from 'recoil';
import flowerAtom from '@/atom/flowerAtom';
import treeAtom from '@/atom/treeAtom';
import flowerLevelAtom from '@/atom/flowerLevelAtom';
import treeLevelAtom from '@/atom/treeLevelAtom';

export default function HomeScreen() {
  const captureRef = useRef<any>(null);
  const flower = useRecoilValue(flowerAtom);
  const tree = useRecoilValue(treeAtom);
  const flowerLevel = useRecoilValue(flowerLevelAtom);
  const treeLevel = useRecoilValue(treeLevelAtom);

  const date = new Date();

  // useEffect(() => {
  //   setTreeLevel(Utils.transformTreeLevel());
  //   setFlowerLevel(Utils.transformFlowerLevel());
  // }, [setFlowerLevel, setTreeLevel]);

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
    <ScrollView>
      <ImageBackground
        style={{minHeight: Dimensions.get('window').height}}
        source={backgroundImage}
        resizeMode="stretch">
        <View style={styles.Container}>
          <ViewShot
            ref={captureRef}
            options={{
              fileName: 'Capture-File',
              format: 'jpg',
              quality: 0.9,
            }}>
            <View style={styles.Capture}>
              <View style={styles.Header}>
                <AppText.Title family="round-a">
                  오늘은 {date.getMonth() + 1}월 {date.getDate()}일 입니다
                </AppText.Title>
                <View></View>
                {/* <TouchableOpacity onPress={onCapture}>
                  <Icon name="share" size={30} color="black" />
                </TouchableOpacity> */}
              </View>
              <View style={styles.PlantContainer}>
                <GrowingPlant kind="tree" level={treeLevel} type={tree} />
                <GrowingPlant kind="flower" level={flowerLevel} type={flower} />
              </View>
            </View>
          </ViewShot>
          <GoalGrid />
        </View>
      </ImageBackground>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  Container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 10,
    minHeight: '100%',
  },
  Header: {
    width: '100%',
    flexDirection: 'row',
    display: 'flex',
    alignItems: 'stretch',
    justifyContent: 'space-around',
  },
  Capture: {
    alignItems: 'center',
    marginVertical: 20,
  },
  PlantContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'center',
    padding: 10,
    marginTop: 70,
  },
});
