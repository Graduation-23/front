import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import BirthRegScreen from '../screens/BirthRegScreen';
import CardRegScreen from '../screens/CardRegScreen';
import useGoogleAccount from '../hooks/useGoogleAccount';

export type AuthorizationStackParamList = {
  Login: undefined;
  Signup: undefined;
  Birth: undefined;
  Card: undefined;
};

const Stack = createNativeStackNavigator<AuthorizationStackParamList>();

export default function AuthorizationNavigator({route}: any) {
  useGoogleAccount(route.params);

  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="Birth" component={BirthRegScreen} />
      <Stack.Screen name="Card" component={CardRegScreen} />
    </Stack.Navigator>
  );
}
