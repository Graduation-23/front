import {StyleSheet, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ListItem} from '@rneui/themed';
import ListItems from '../components/ListItems';
import {useState} from 'react';
import DialogActions from '../components/DialogActions';

export default function SettingScreen() {
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
  const toggleDialog = () => {
    setVisible(!visible);
  };

  return (
    <SafeAreaView style={styles.Container}>
      <ScrollView>
        {/*앱 관련 */}
        <ListItem>
          <ListItem.Title style={styles.title}>앱</ListItem.Title>
        </ListItem>
        {/* mapping() */}
        <ListItems icon="user" label="공지" color="#fce" />
        <ListItems icon="user" label="업데이트 내역" color="#fce" />
        <ListItems icon="user" label="현재 버전" color="#fce" />

        {/*금융 관련 */}
        <ListItem>
          <ListItem.Title style={styles.title}>금융</ListItem.Title>
        </ListItem>
        <ListItems icon="user" label="카드(계좌) 등록" color="#fce085" />
        <ListItems icon="user" label="결제 내역 연동" color="#fce085" />

        {/*회원 관련 */}
        <ListItem>
          <ListItem.Title style={styles.title}>개인</ListItem.Title>
        </ListItem>
        <ListItems icon="user" label="회원 정보" color="#fce085" />
        <ListItems
          icon="user"
          label="로그아웃"
          color="#fce085"
          onPress={() => {
            toggleDialog();
          }}
        />
        <ListItems icon="user" label="회원 탈퇴" color="#e64c4c" />
      </ScrollView>
      {visible && (
        <DialogActions
          visible={visible}
          toggleDialog={toggleDialog}
          title="로그아웃"
          contents="로그아웃 하시겠습니까?"
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
    fontSize: 20,
    fontWeight: 'bold',
    width: '100%',
    marginBottom: -10,
  },
});
