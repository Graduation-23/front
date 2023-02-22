import {useRef} from 'react';
import {PermissionsAndroid, Platform, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useRecoilValue} from 'recoil';
import userAtom from '../atom/userAtom';
import {AppText} from '../components/AppText';
import GrowingPlant from '../features/Home/GrowingPlant';
import ViewShot from 'react-native-view-shot';
import {Button} from '@rneui/themed';
import CameraRoll from '@react-native-community/cameraroll';
import Share from 'react-native-share';

export default function HomeScreen() {
  const user = useRecoilValue(userAtom);
  const captureRef = useRef<any>(null);

  const onCapture = () => {
    if (captureRef.current !== undefined) {
      captureRef.current?.capture().then((uri: any) => {
        console.log('캡쳐하고싶다.', uri);
        onShare(uri);
      });
    }
  };

  const onShare = async (uri: any) => {
    const res = Share.open({
      url: Platform.OS === 'ios' ? `file://${uri}` : uri,
    });
    console.log('저장 성공!,', res);
  };

  return (
    <ViewShot
      ref={captureRef}
      options={{fileName: 'Capture-File', format: 'jpg', quality: 0.9}}>
      <SafeAreaView style={styles.Container}>
        <AppText.Title family="round-a">
          {user && user.nickname}님이 키우고 있는 식물
        </AppText.Title>
        <View style={styles.PlantContainer}>
          <GrowingPlant kind="tree" level={9} type="spring_tree" />
          <GrowingPlant kind="flower" level={2} type="marigold" />
        </View>
        <Button title="캡쳐" onPress={onCapture} />
        {/* <Button title="공유" onPress={onSave} /> */}
      </SafeAreaView>
    </ViewShot>
  );
}

const styles = StyleSheet.create({
  Container: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f2f2f2',
  },
  PlantContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'center',
    padding: 10,
  },
});

//<Calendar
//   dayComponent={({date, state}) => {
//     return (
//       <View>
//         <Text
//           style={{
//             textAlign: 'center',
//             color: state === 'disabled' ? 'gray' : 'black',
//           }}>
//           {date && date.day}
//         </Text>
//         <Text style={{fontSize: 10, color: 'red'}}>1원</Text>
//       </View>
//     );
//   }}></Calendar>
