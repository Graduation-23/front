import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Account} from '../constants/screen';
import AccountBookScreen from '../screens/AccountBookScreen';

const Stack = createNativeStackNavigator();

export default function AccountBookNavigator() {
  return (
    <Stack.Navigator initialRouteName={Account.Main}>
      <Stack.Screen name={Account.Main} component={AccountBookScreen} />
    </Stack.Navigator>
  );
}
