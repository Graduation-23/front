import {View} from 'react-native';

import UText from '../components/UText';

export default function HomeScreen() {
  return (
    <View style={{backgroundColor: 'white'}}>
      <UText smooth style={{fontSize: 24, color: 'black'}}>
        hello
      </UText>
    </View>
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
