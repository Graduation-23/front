// import {View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {AppText} from '../components/AppText';

export default function HomeScreen() {
  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
      <AppText.Title family="round-a" style={{fontSize: 35}}>
        안녕하세요. Hello
      </AppText.Title>
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
