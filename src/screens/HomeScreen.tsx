import {StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useRecoilValue} from 'recoil';
import userAtom from '../atom/userAtom';
import {AppText} from '../components/AppText';
import GrowingPlant from '../features/Home/GrowingPlant';

export default function HomeScreen() {
  const user = useRecoilValue(userAtom);
  // const {data} = useFinance();
  return (
    <SafeAreaView>
      <View>
        <AppText.Title family="round-a" style={{fontSize: 35}}>
          {user && user.nickname}님이 키우고 있는 식물들이에용~
        </AppText.Title>
        <View style={styles.Container}>
          <GrowingPlant kind="tree" level={1} type="bamboo" />
          <GrowingPlant kind="flower" level={0} type="acacia" />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Container: {
    height: '100%',
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingBottom: 10,
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
