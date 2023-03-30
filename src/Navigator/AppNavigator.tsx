import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Entry} from '@/constants/screen';
import AuthorizationNavigator from './AuthorizationNavigator';
import ContentNavigator from './ContentNavigator';
import LoadingScreen from '@/screens/LoadingScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator
      initialRouteName={Entry.Loading}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={Entry.Loading} component={LoadingScreen} />
      <Stack.Screen name={Entry.Auth} component={AuthorizationNavigator} />
      <Stack.Screen name={Entry.Content} component={ContentNavigator} />
    </Stack.Navigator>
  );
}
