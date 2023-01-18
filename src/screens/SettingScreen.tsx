import {Text} from '@rneui/base';
import {SafeAreaView, StyleSheet} from 'react-native';
import {ListItem} from '@rneui/themed';
import Icon from 'react-native-vector-icons/Feather';

export default function SettingScreen() {
  return (
    <SafeAreaView style={styles.Container}>
      {/*금융 관련 */}
      <ListItem>
        <ListItem.Title style={styles.title}>금융</ListItem.Title>
      </ListItem>
      <ListItem style={styles.listContainer}>
        <Icon name="user" size={40} color="#fce085" />
        <ListItem.Title style={styles.contents}>
          <Text style={styles.text}>카드(계좌) 등록</Text>
        </ListItem.Title>
        <ListItem.Chevron size={40} />
      </ListItem>
      {/*회원 관련 */}
      <ListItem>
        <ListItem.Title style={styles.title}>개인</ListItem.Title>
      </ListItem>
      <ListItem style={styles.listContainer}>
        <Icon name="user" size={40} color="#fce085" />
        <ListItem.Title style={styles.contents}>
          <Text style={styles.text}>회원 정보</Text>
        </ListItem.Title>
        <ListItem.Chevron size={40} />
      </ListItem>
      <ListItem>
        <Icon name="user" size={40} color="#fce085" />
        <ListItem.Title style={styles.contents}>
          <Text style={styles.text}>회원 탈퇴</Text>
        </ListItem.Title>
      </ListItem>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  listContainer: {
    borderColor: 'black',
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    width: '100%',
  },
  contents: {
    width: '75%',
  },
  text: {
    fontSize: 20,
  },
});
