import {StyleSheet, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ListItem} from '@rneui/themed';
import ListItems from '@components/ListItems';
import {useState} from 'react';
//import DialogActions from '@components/DialogActions';
import WithdrawalDialog from '@features/WithdrawalDialog';
import {AppText} from '@components/AppText';
//import {saveRefreshToken} from '@utils/refreshToken';
import Logout from '@features/Logout';
import {Auth} from '@constants/screen';

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
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);

  const toggleDialog = () => {
    setVisible(!visible);
  };

  const toggleInputDialog = () => {
    setVisible2(!visible2);
  };

  return (
    <SafeAreaView style={styles.Container}>
      <ScrollView>
        {/*앱 관련 */}
        <ListItem>
          <ListItem.Title style={styles.title}>
            <AppText family="round-d">앱</AppText>
          </ListItem.Title>
        </ListItem>
        {/* mapping() */}
        <ListItem>
          <ListItems icon="notifications" label="공지" color="#74828a" />
        </ListItem>
        <ListItem>
          <ListItems icon="trending-up" label="업데이트 내역" color="#a878fb" />
        </ListItem>
        <ListItem>
          <ListItems icon="bar-chart" label="현재 버전" color="#f9c165" />
        </ListItem>

        {/*금융 관련 */}
        <ListItem>
          <ListItem.Title style={styles.title}>
            <AppText family="round-d">금융</AppText>
          </ListItem.Title>
        </ListItem>
        <ListItem>
          <ListItems
            icon="credit-card"
            label="카드(계좌) 등록"
            color="#85d8fc"
            onPress={() => {
              navigation.navigate(Auth.Card);
            }}
          />
        </ListItem>
        <ListItem>
          <ListItems
            icon="link"
            label="결제 내역 연동"
            color="#5ed2b1"
            onPress={() => {
              navigation.navigate('LinkUpPayment');
            }}
          />
        </ListItem>
        {/*회원 관련 */}
        <ListItem>
          <ListItem.Title style={styles.title}>
            <AppText family="round-d">개인</AppText>
          </ListItem.Title>
        </ListItem>
        <ListItem>
          <ListItems
            icon="info"
            label="회원 정보"
            color="#fce085"
            onPress={() => {
              navigation.navigate('UserInfo');
            }}
          />
        </ListItem>
        <ListItem>
          <ListItems
            icon="logout"
            label="로그아웃"
            color="#e64c4c"
            onPress={() => {
              toggleDialog();
            }}
          />
        </ListItem>
        <ListItem>
          <ListItems
            icon="close"
            label="회원 탈퇴"
            color="#e64c4c"
            onPress={() => {
              toggleInputDialog();
            }}
          />
        </ListItem>
      </ScrollView>
      {/* {visible && (
        <DialogActions
          visible={visible}
          toggleDialog={() => {
            saveRefreshToken('');
            toggleDialog();
          }}
          title="로그아웃"
          contents="로그아웃 하시겠습니까?"
        />
      )} */}
      {visible && (
        <Logout
          visible={visible}
          toggleDialog={toggleDialog}
          nav={navigation}
        />
      )}
      {visible2 && (
        <WithdrawalDialog visible={visible2} toggleDialog={toggleInputDialog} />
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
