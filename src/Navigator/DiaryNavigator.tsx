import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Diary} from '../constants/screen';
import DiaryReadScreen from '../screens/DiaryReadScreen';
import DiaryScreen from '../screens/DiaryScreen';
import DiaryWriteScreen from '../screens/DiaryWriteScreen';

const Stack = createNativeStackNavigator();

export default function DiaryNavigator() {
  return (
    <Stack.Navigator initialRouteName={Diary.Main}>
      <Stack.Screen name={Diary.Main} component={DiaryScreen} />
      <Stack.Screen name={Diary.Write} component={DiaryWriteScreen} />
      <Stack.Screen name={Diary.Read} component={DiaryReadScreen} />
    </Stack.Navigator>
  );
}
