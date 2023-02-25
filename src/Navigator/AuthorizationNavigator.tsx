import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginScreen from '@screens/LoginScreen';
import SignUpScreen from '@screens/SignupScreen';
import BirthRegScreen from '@screens/BirthRegScreen';
import CardRegScreen from '@screens/CardRegScreen';
import useGoogleAccount from '@hooks/useGoogleAccount';
import {Auth} from '@constants/screen';

export type AuthorizationStackParamList = Record<keyof typeof Auth, undefined>;

const Stack = createNativeStackNavigator<AuthorizationStackParamList>();

export default function AuthorizationNavigator({route}: any) {
  useGoogleAccount(route.params);

  return (
    <Stack.Navigator
      initialRouteName={Auth.Login}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={Auth.Login} component={LoginScreen} />
      <Stack.Screen name={Auth.SignUp} component={SignUpScreen} />
      <Stack.Screen name={Auth.Birth} component={BirthRegScreen} />
      <Stack.Screen name={Auth.Card} component={CardRegScreen} />
    </Stack.Navigator>
  );
}
