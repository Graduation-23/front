import {StyleSheet, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ListItem} from '@rneui/themed';
import ListItems from '@components/ListItems';
import {useState} from 'react';
//import DialogActions from '../components/DialogActions';
import WithdrawalDialog from '@features/WithdrawalDialog';
import {AppText} from '@components/AppText';
//import {saveRefreshToken} from '@utils/refreshToken';
import Logout from '@features/Logout';
import {Auth, Setting} from '@constants/screen';
import {useNavigation} from '@react-navigation/native';
import UpdateDialog from '@/features/UpdateDialog';

export default function SettingScreen({navigation}: any) {
  // const app = [
  //   {k: 0, iconName: 'user', label: '공지', color: '#fce'},
  //   {k: 1, iconName: 'user', label: '업데이트 내역', color: '#fce'},
  //   {k: 2, iconName: 'user', label: '현재 버전', color: '#fce'},
  // ];

  // const mapping = (): JSX.Element[] => {
  //   const a = app.map(v => {
  //     return (
  //       <ListItems
  //         key={v.k}
  //         icon={v.iconName}
  //         label={v.label}
  //         color={v.color}
  //       />
  //     );
  //   });
  //   return a;
  // };
  const [update, setUpdate] = useState(false); //업데이트 내역 모달 visible
  const [logout, setLogout] = useState(false); //로그아웃 모달 visible
  const [withdrawal, setWithdrawal] = useState(false); //회원탈퇴 모달 visible
  const version = 'v1.0.1';
  const from = 'setting';

  const {navigate} = useNavigation<any>();

  const toggleUpdateDialog = () => {
    setUpdate(!update);
  };

  const toggleLogoutDialog = () => {
    setLogout(!logout);
  };

  const toggleWithdrawalDialog = () => {
    setWithdrawal(!withdrawal);
  };

  return (
    <SafeAreaView style={styles.Container}>
      <ScrollView>
        {/*앱 관련 */}
        <ListItem>
          <ListItem.Title style={styles.title}>
            <AppText.Subtitle family="round-b">앱</AppText.Subtitle>
          </ListItem.Title>
        </ListItem>
        {/* mapping() */}
        <ListItem>
          <ListItems
            icon="notifications"
            label="공지"
            color="#74828a"
            onPress={() => {
              navigate(Setting.Notice);
            }}
          />
        </ListItem>
        <ListItem>
          <ListItems
            icon="trending-up"
            label="업데이트 내역"
            color="#a878fb"
            onPress={() => {
              toggleUpdateDialog();
            }}
          />
        </ListItem>
        <ListItem>
          <ListItems
            icon="bar-chart"
            label="현재 버전"
            color="#f9c165"
            contents={version}
          />
        </ListItem>

        {/*금융 관련 */}
        <ListItem>
          <ListItem.Title style={styles.title}>
            <AppText.Subtitle family="round-b">금융</AppText.Subtitle>
          </ListItem.Title>
        </ListItem>
        <ListItem>
          <ListItems
            icon="credit-card"
            label="카드(계좌) 등록"
            color="#85d8fc"
            onPress={() => {
              navigate(Auth.Card, {from: from});
            }}
          />
        </ListItem>
        <ListItem>
          <ListItems
            icon="link"
            label="결제 내역 연동"
            color="#5ed2b1"
            onPress={() => {
              navigate(Setting.LinkUpPayment);
            }}
          />
        </ListItem>
        {/*회원 관련 */}
        <ListItem>
          <ListItem.Title style={styles.title}>
            <AppText.Subtitle family="round-b">개인</AppText.Subtitle>
          </ListItem.Title>
        </ListItem>
        <ListItem>
          <ListItems
            icon="info"
            label="회원 정보"
            color="#fce085"
            onPress={() => {
              navigate(Setting.UserInfo);
            }}
          />
        </ListItem>
        <ListItem>
          <ListItems
            icon="favorite"
            label="업적"
            color="#ff98d1"
            onPress={() => {
              navigate(Setting.Achieve);
            }}
          />
        </ListItem>
        <ListItem>
          <ListItems
            icon="logout"
            label="로그아웃"
            color="#e64c4c"
            onPress={() => {
              toggleLogoutDialog();
            }}
          />
        </ListItem>
        <ListItem>
          <ListItems
            icon="close"
            label="회원 탈퇴"
            color="#e64c4c"
            onPress={() => {
              toggleWithdrawalDialog();
            }}
          />
        </ListItem>
      </ScrollView>
      {update && (
        <UpdateDialog visible={update} toggleDialog={toggleUpdateDialog} />
      )}
      {logout && (
        <Logout
          visible={logout}
          toggleDialog={toggleLogoutDialog}
          nav={navigation}
        />
      )}
      {withdrawal && (
        <WithdrawalDialog
          visible={withdrawal}
          toggleDialog={toggleWithdrawalDialog}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    width: '100%',
    marginBottom: -10,
  },
});
