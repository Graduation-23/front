import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DiaryScreen from '../screens/DiaryScreen';
import DiaryWriteScreen from '../screens/DiaryWriteScreen';

const Stack = createNativeStackNavigator();

export default function DiaryNavigator() {
  return (
    <Stack.Navigator initialRouteName="Diary">
      <Stack.Screen name="Diary" component={DiaryScreen} />
      <Stack.Screen name="DiaryWrite" component={DiaryWriteScreen} />
    </Stack.Navigator>
  );
}
