import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useEffect} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import HomeScreen from '../screens/HomeScreen';
import AccountBookNavigator from './AccountBookNavigator';
import DiaryNavigator from './DiaryNavigator';
import SettingNavigator from './SettingNavigator';

import userAtom from '../atom/userAtom';
import {useRecoilValue} from 'recoil';
//MaterialCommunityIcons.loadFont();

const Tab = createBottomTabNavigator();

export default function ContentNavigator({navigation}: any) {
  const user = useRecoilValue(userAtom);

  useEffect(() => {
    if (!user) {
      navigation.navigate('AuthorizationNavigator');
    }
    console.log('우와');
  }, [user, navigation]);

  return (
    <Tab.Navigator
      screenOptions={{headerShown: false, tabBarActiveTintColor: '#3182F7'}}
      initialRouteName="HomeNavigator">
      <Tab.Screen
        name="HomeNavigator"
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        name="DiaryNavigator"
        options={{
          tabBarLabel: 'Diary',
          tabBarIcon: ({color, size}) => (
            <Icon name="book" color={color} size={size} />
          ),
        }}
        component={DiaryNavigator}
      />
      <Tab.Screen
        name="BookNavigator"
        options={{
          tabBarLabel: 'Pay',
          tabBarIcon: ({color, size}) => (
            <Icon name="payments" color={color} size={size} />
          ),
        }}
        component={AccountBookNavigator}
      />
      <Tab.Screen
        name="SettingNavigator"
        options={{
          tabBarLabel: 'Setting',
          tabBarIcon: ({color, size}) => (
            <Icon name="settings" color={color} size={size} />
          ),
        }}
        component={SettingNavigator}
      />
    </Tab.Navigator>
  );
}
