import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Account} from '@constants/screen';
import AccountBookScreen from '@screens/AccountBookScreen';
import AccountChartScreen from '../screens/AccountChartScreen';
import {Text} from '@rneui/base';
import AccountHistoryScreen from '@/screens/AccountHistory';

const Stack = createNativeStackNavigator();

export default function AccountBookNavigator() {
  return (
    <Stack.Navigator initialRouteName={Account.Main}>
      <Stack.Screen
        name={Account.Main}
        component={AccountBookScreen}
        options={({navigation}) => ({
          title: '지출 내역',
          headerRight() {
            return (
              <Text
                style={{color: '#29b6f6'}}
                onPress={() => {
                  navigation.navigate(Account.History);
                }}>
                연혁
              </Text>
            );
          },
        })}
      />
      <Stack.Screen
        name={Account.Chart}
        component={AccountChartScreen}
        options={{
          title: '지출 분석',
        }}
      />
      <Stack.Screen
        name={Account.History}
        component={AccountHistoryScreen}
        options={{
          title: '연혁',
        }}
      />
    </Stack.Navigator>
  );
}
