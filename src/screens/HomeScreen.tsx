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
    <SafeAreaView style={styles.Container}>
      <AppText.Title family="round-a" style={{fontSize: 35}}>
        {user && user.nickname}님이 키우고 있는 식물들이에용~
      </AppText.Title>
      <View style={styles.PlantContainer}>
        <GrowingPlant kind="tree" level={9} type="spring_tree" />
        <GrowingPlant kind="flower" level={7} type="marigold" />
      </View>
    </SafeAreaView>
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
