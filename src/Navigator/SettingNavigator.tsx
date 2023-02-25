import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SettingScreen from '@screens/SettingScreen';
import NoticeScreen from '@/screens/NoticeScreen';
import UserInfoScreen from '@screens/UserInfoScreen';
//import CardRegScreen from '@screens/CardRegScreen';
import LinkPaymentScreen from '@screens/LinkPaymentScreen';
import {Setting} from '@constants/screen';

const Stack = createNativeStackNavigator();

export default function SettingNavigator() {
  return (
    <Stack.Navigator initialRouteName={Setting.Main}>
      {/* 설정 스크린 */}
      <Stack.Screen
        name={Setting.Main}
        component={SettingScreen}
        options={{
          title: '설정',
        }}
      />
      <Stack.Screen
        name={Setting.Notice}
        component={NoticeScreen}
        options={{
          title: '공지',
        }}
      />
      {/* 카드 등록, 결제내역 연동, 회원정보 */}
      {/* 카드 등록 */}
      {/* <Stack.Screen name="CardRegister" component={CardRegScreen} /> */}
      {/* 결제내역 연동*/}
      <Stack.Screen
        name={Setting.LinkUpPayment}
        component={LinkPaymentScreen}
        options={{
          title: '결제내역 연동',
        }}
      />
      {/* 회원 정보 */}
      <Stack.Screen
        name={Setting.UserInfo}
        component={UserInfoScreen}
        options={{
          title: '회원정보',
        }}
      />
    </Stack.Navigator>
  );
}
