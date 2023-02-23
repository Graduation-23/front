import {useRef, useState} from 'react';
import {Platform, StyleSheet, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useRecoilValue} from 'recoil';
import userAtom from '../atom/userAtom';
import {AppText} from '../components/AppText';
import GrowingPlant from '../features/Home/GrowingPlant';
import ViewShot from 'react-native-view-shot';
import Share from 'react-native-share';
import Icon from 'react-native-vector-icons/MaterialIcons';
import GoalGrid from '@/features/Home/Goal/GoalGrid';
import GoalRegDialog from '@/features/Home/Goal/GoalRegDialog';
import {Button} from '@rneui/themed';

export default function HomeScreen() {
  const user = useRecoilValue(userAtom);
  const captureRef = useRef<any>(null);
  const [wVisible, setWVisible] = useState(false);
  const [mVisible, setMVisible] = useState(false);

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
    <SafeAreaView style={styles.Container}>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity onPress={onCapture}>
          <Icon name="share" size={30} color="black" />
        </TouchableOpacity>
        <Button title="월간" onPress={handleMonth} />
        <Button title="주간" onPress={handleWeek} />
      </View>
      <ViewShot
        ref={captureRef}
        options={{fileName: 'Capture-File', format: 'jpg', quality: 0.9}}>
        <View style={styles.Capture}>
          <AppText.Title family="round-a">
            {user && user.nickname}님이 키우고 있는 식물
          </AppText.Title>
          <View style={styles.PlantContainer}>
            <GrowingPlant kind="tree" level={9} type="spring_tree" />
            <GrowingPlant kind="flower" level={2} type="marigold" />
          </View>
        </View>
      </ViewShot>

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
      <GoalGrid />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  Capture: {
    backgroundColor: '#f2f2f2',
  },
  PlantContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'center',
    padding: 10,
  },
});
