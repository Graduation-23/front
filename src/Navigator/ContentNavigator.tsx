import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {Content} from '@constants/screen';

import HomeScreen from '@screens/HomeScreen';
import AccountBookNavigator from './AccountBookNavigator';
import DiaryNavigator from './DiaryNavigator';
import SettingNavigator from './SettingNavigator';

//MaterialCommunityIcons.loadFont();

const Tab = createBottomTabNavigator();

export default function ContentNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false, tabBarActiveTintColor: '#3182F7'}}
      initialRouteName={Content.HomeTab}>
      <Tab.Screen
        name={Content.HomeTab}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        name={Content.DiaryTab}
        options={{
          tabBarLabel: 'Diary',
          tabBarIcon: ({color, size}) => (
            <Icon name="book" color={color} size={size} />
          ),
        }}
        component={DiaryNavigator}
      />
      <Tab.Screen
        name={Content.BookTab}
        options={{
          tabBarLabel: 'Pay',
          tabBarIcon: ({color, size}) => (
            <Icon name="payments" color={color} size={size} />
          ),
        }}
        component={AccountBookNavigator}
      />
      <Tab.Screen
        name={Content.SettingTab}
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
