import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthorizationNavigator from './AuthorizationNavigator';
import ContentNavigator from './ContentNavigator';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="AuthorizationNavigator"
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="AuthorizationNavigator"
        component={AuthorizationNavigator}
      />
      <Stack.Screen name="ContentNavigator" component={ContentNavigator} />
    </Stack.Navigator>
  );
}
