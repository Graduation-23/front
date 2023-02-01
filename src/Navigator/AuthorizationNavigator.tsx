import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useEffect} from 'react';
import {ToastAndroid} from 'react-native';
import {useRecoilState} from 'recoil';
import {setAuthHeader} from '../api/client';
import userAtom from '../atom/userAtom';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';

export type AuthorizationStackParamList = {
  Login: undefined;
  Signup: undefined;
};

const Stack = createNativeStackNavigator<AuthorizationStackParamList>();

export default function AuthorizationNavigator({route, navigation}: any) {
  const [user, setUser] = useRecoilState(userAtom);

  useEffect(() => {
    if (route.params && route.params.error === 'false') {
      setAuthHeader({
        token: {
          access: route.params['access'],
          refresh: route.params['refresh'],
        },
      });

      const isNew = route.params['isNew'] === 'true';

      ToastAndroid.show(`첫 방문 여부: ${isNew}`, ToastAndroid.SHORT);

      setUser({name: 'google'});
    }
  }, [route, setUser]);

  useEffect(() => {
    if (user) {
      navigation.navigate('ContentNavigator');
    }
  }, [navigation, user]);

  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
}
