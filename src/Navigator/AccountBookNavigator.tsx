import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AccountBookScreen from '../screens/AccountBookScreen';

const Stack = createNativeStackNavigator();

export default function AccountBookNavigator() {
  return (
    <Stack.Navigator initialRouteName="Book">
      <Stack.Screen name="Book" component={AccountBookScreen} />
    </Stack.Navigator>
  );
}
