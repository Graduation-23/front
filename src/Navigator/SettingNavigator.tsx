import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SettingScreen from '../screens/SettingScreen';

const Stack = createNativeStackNavigator();

export default function SettingNavigator() {
  return (
    <Stack.Navigator initialRouteName="Setting">
      <Stack.Screen name="Setting" component={SettingScreen} />
    </Stack.Navigator>
  );
}
