// import {View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useRecoilValue} from 'recoil';
import userAtom from '../atom/userAtom';
import {AppText} from '../components/AppText';

//import {Image} from 'react-native';
//import cotton_flower from '../assets/flowers/cotton_flower.png';

export default function HomeScreen() {
  const user = useRecoilValue(userAtom);
  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
      <AppText.Title family="round-a" style={{fontSize: 35}}>
        {user && user.nickname}님 안녕하세요.
      </AppText.Title>
      {/* <Image source={cotton_flower} style={{backgroundColor: '#f2f2f2'}} /> */}
    </SafeAreaView>
  );
}

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
