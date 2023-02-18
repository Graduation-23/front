import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Entry} from '@constants/screen';
import AuthorizationNavigator from './AuthorizationNavigator';
import ContentNavigator from './ContentNavigator';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator
      initialRouteName={Entry.Auth}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={Entry.Auth} component={AuthorizationNavigator} />
      <Stack.Screen name={Entry.Content} component={ContentNavigator} />
    </Stack.Navigator>
  );
}
