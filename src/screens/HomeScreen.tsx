import {useRef, useState} from 'react';
import {
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
  ScrollView,
  ImageBackground,
} from 'react-native';
//import {SafeAreaView} from 'react-native-safe-area-context';
import {AppText} from '../components/AppText';
import GrowingPlant from '../features/Home/GrowingPlant';
import ViewShot from 'react-native-view-shot';
import Share from 'react-native-share';
import Icon from 'react-native-vector-icons/MaterialIcons';
import GoalGrid from '@/features/Home/Goal/GoalGrid';
import GoalRegDialog from '@/features/Home/Goal/GoalRegDialog';
import {Button} from '@rneui/themed';
import backgroundImage from '../assets/backgroundImage.jpg';

export default function HomeScreen() {
  const captureRef = useRef<any>(null);
  const [wVisible, setWVisible] = useState(false);
  const [mVisible, setMVisible] = useState(false);
  const date = new Date();

  const handleMonth = () => {
    setMVisible(!mVisible);
  };

  const handleWeek = () => {
    setWVisible(!wVisible);
  };

  // const onCapture = useCallback((uri: any) => {
  //   console.log('캡처 할거야');
  //   onShare(uri);
  // }, []);

  const onCapture = () => {
    try {
      if (captureRef.current !== undefined) {
        captureRef.current
          ?.capture()
          .then((uri: any) => {
            console.log('캡쳐하고싶다.', uri);
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
      console.log('저장 성공!');
    } catch {
      console.log('저장 실패!');
    }
  };

  return (
    // <SafeAreaView style={styles.Container}>
    // <ScrollView style={{minHeight: '100%', backgroundColor: 'red'}}>
    <ImageBackground
      imageStyle={{minHeight: '100%'}}
      style={{minHeight: '100%'}}
      source={backgroundImage}
      resizeMode="cover">
      <ScrollView>
        <View style={styles.Container}>
          <View style={styles.Tmp}>
            <Button title="월간" onPress={handleMonth} />
            <Button title="주간" onPress={handleWeek} />
          </View>
          <ViewShot
            ref={captureRef}
            options={{fileName: 'Capture-File', format: 'jpg', quality: 0.9}}>
            <View style={styles.Capture}>
              <View style={styles.Header}>
                <AppText.Title family="round-a">
                  오늘은 {date.getMonth() + 1}월 {date.getDate()}일 입니다
                </AppText.Title>
                <TouchableOpacity onPress={onCapture}>
                  <Icon name="share" size={30} color="black" />
                </TouchableOpacity>
              </View>
              <View style={styles.PlantContainer}>
                <GrowingPlant kind="tree" level={9} type="spring_tree" />
                <GrowingPlant kind="flower" level={2} type="marigold" />
              </View>
            </View>
          </ViewShot>
          <GoalGrid />

          {mVisible && (
            <GoalRegDialog
              visible={mVisible}
              toggleDialog={handleMonth}
              select="월간"
            />
          )}
          {wVisible && (
            <GoalRegDialog
              visible={wVisible}
              toggleDialog={handleWeek}
              select="주간"
            />
          )}
        </View>
      </ScrollView>
    </ImageBackground>
    // </ScrollView>
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    minHeight: '100%',
  },
  Tmp: {
    flexDirection: 'row',
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
  },
});
