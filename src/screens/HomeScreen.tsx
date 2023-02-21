import {useRef} from 'react';
import {CameraRoll, Platform, Share, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useRecoilValue} from 'recoil';
import userAtom from '../atom/userAtom';
import {AppText} from '../components/AppText';
import GrowingPlant from '../features/Home/GrowingPlant';
import ViewShot from 'react-native-view-shot';
import {Button} from '@rneui/themed';

export default function HomeScreen() {
  const user = useRecoilValue(userAtom);
  const ref = useRef<any>(null);

  const onShare = async (uri: any) => {
    const result = await Share.share({
      url: Platform.OS === 'ios' ? `file://${uri}` : uri,
    });
  };

  const onCapture = () => {
    if (ref.current) {
      ref.current.capture().then((uri: any) => {
        console.log('do something with', uri);
      });
    }
  };

  const onSave = async () => {
    if (Platform.OS === 'android' && !(await hasAndroidPermission())) {
      toast('갤러리 접근 권한 없음');
      return;
    }

    const uri = await getPhotoUri();
    const result = await CameraRoll.save(uri);
    console.log('result : ', result);
  };

  return (
    <ViewShot
      ref={ref}
      options={{fileName: 'Your-File-Name', format: 'jpg', quality: 0.9}}>
      <SafeAreaView style={styles.Container}>
        <AppText.Title family="round-a">
          {user && user.nickname}님이 키우고 있는 식물
        </AppText.Title>
        <View style={styles.PlantContainer}>
          <GrowingPlant kind="tree" level={9} type="spring_tree" />
          <GrowingPlant kind="flower" level={2} type="marigold" />
        </View>
        <Button title="캡쳐" onPress={onCapture} />
        <Button title="공유" onPress={onSave} />
      </SafeAreaView>
    </ViewShot>
  );
}

const styles = StyleSheet.create({
  Container: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
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
