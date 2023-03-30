import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Account} from '@constants/screen';
import AccountBookScreen from '@screens/AccountBookScreen';
import AccountChartScreen from '../screens/AccountChartScreen';
import AccountHistoryScreen from '@/screens/AccountHistory';
import {AppText} from '@/components/AppText';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createNativeStackNavigator();

export default function AccountBookNavigator() {
  return (
    <Stack.Navigator initialRouteName={Account.Main}>
      <Stack.Screen
        name={Account.Main}
        component={AccountBookScreen}
        options={({navigation}) => ({
          headerTitle() {
            return <AppText.Title family="round-d" text="Pay" />;
          },
          headerRight() {
            return (
              <AppText
                style={{color: '#29b6f6'}}
                onPress={() => {
                  navigation.navigate(Account.History);
                }}>
                <Icon name="chart-bar" size={25} />
              </AppText>
            );
          },
        })}
      />
      <Stack.Screen
        name={Account.Chart}
        component={AccountChartScreen}
        options={{
          headerTitle() {
            return <AppText.Title family="round-d" text="Analysis" />;
          },
        }}
      />
      <Stack.Screen
        name={Account.History}
        component={AccountHistoryScreen}
        options={{
          headerTitle() {
            return <AppText.Title family="round-d" text="History" />;
          },
        }}
      />
    </Stack.Navigator>
  );
}
