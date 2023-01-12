import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FeatherIcons from 'react-native-vector-icons/Feather';
import IonIcons from 'react-native-vector-icons/Ionicons';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

import HomeScreen from '../screens/HomeScreen';
import AccountBookNavigator from './AccountBookNavigator';
import DiaryNavigator from './DiaryNavigator';
import SettingNavigator from './SettingNavigator';

MaterialCommunityIcons.loadFont();

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false, tabBarActiveTintColor: '#e91e63'}}
      initialRouteName="HomeNavigator">
      <Tab.Screen
        name="HomeNavigator"
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        name="DiaryNavigator"
        options={{
          tabBarLabel: 'Diary',
          tabBarIcon: ({color, size}) => (
            <FeatherIcons name="book" color={color} size={size} />
          ),
        }}
        component={DiaryNavigator}
      />
      <Tab.Screen
        name="BookNavigator"
        options={{
          tabBarLabel: 'Book',
          tabBarIcon: ({color, size}) => (
            <IonIcons name="stats-chart" color={color} size={size} />
          ),
        }}
        component={AccountBookNavigator}
      />
      <Tab.Screen
        name="SettingNavigator"
        options={{
          tabBarLabel: 'Setting',
          tabBarIcon: ({color, size}) => (
            <AntDesignIcon name="setting" color={color} size={size} />
          ),
        }}
        component={SettingNavigator}
      />
    </Tab.Navigator>
  );
}
