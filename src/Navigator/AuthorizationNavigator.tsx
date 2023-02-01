import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useEffect} from 'react';
import {useRecoilState} from 'recoil';
import tokenAtom from '../atom/token';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import BirthRegScreen from '../screens/BirthRegScreen';
import {getItemAsync} from '../utils/storage';

export type AuthorizationStackParamList = {
  Login: undefined;
  Signup: undefined;
  Birth: undefined;
};

const Stack = createNativeStackNavigator<AuthorizationStackParamList>();

export default function AuthorizationNavigator({route, navigation}: any) {
  const [token, setToken] = useRecoilState(tokenAtom);

  useEffect(() => {
    getItemAsync<string>('refreshToken')
      .then(setToken)
      .catch(err => {
        if (err) console.log('no refreshToken in Storage');
      });
  }, [setToken]);

  useEffect(() => {
    if (route.params && route.params.error === 'false') {
      setToken(route.params.refresh);
    }
  }, [route, setToken]);

  useEffect(() => {
    if (token && token.length > 0) {
      navigation.navigate('ContentNavigator');
    }
  }, [token, navigation]);

  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="Birth" component={BirthRegScreen} />
    </Stack.Navigator>
  );
}
