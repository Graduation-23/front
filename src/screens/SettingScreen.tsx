import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ListItem} from '@rneui/themed';
import ListItems from '../components/ListItems';

export default function SettingScreen() {
  return (
    <SafeAreaView style={styles.Container}>
      {/*금융 관련 */}
      <ListItem>
        <ListItem.Title style={styles.title}>금융</ListItem.Title>
      </ListItem>
      <ListItems icon="user" label="카드(계좌) 등록" />
      {/*회원 관련 */}

      <ListItem>
        <ListItem.Title style={styles.title}>개인</ListItem.Title>
      </ListItem>
      <ListItems icon="user" label="회원 정보" />
      <ListItems icon="user" label="로그아웃" />
      <ListItems icon="user" label="회원 탈퇴" />
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
