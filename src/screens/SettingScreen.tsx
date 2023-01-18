import {Text} from '@rneui/base';
import {SafeAreaView} from 'react-native';
import {ListItem} from '@rneui/themed';
import Icon from 'react-native-vector-icons/Feather';

export default function SettingScreen() {
  return (
    <SafeAreaView style={{alignItems: 'center', justifyContent: 'center'}}>
      {/*금융 관련 */}
      <ListItem style={{width: '100%'}}>
        <ListItem.Title style={{fontSize: 20, fontWeight: 'bold'}}>
          금융
        </ListItem.Title>
      </ListItem>
      <ListItem style={{borderColor: 'black', borderBottomWidth: 1}}>
        <Icon name="user" size={40} color="#fce085" />
        <ListItem.Title style={{width: '75%'}}>
          <Text style={{fontSize: 20}}>카드(계좌) 등록</Text>
        </ListItem.Title>
        <ListItem.Chevron size={40} />
      </ListItem>
      {/*회원 관련 */}
      <ListItem style={{width: '100%'}}>
        <ListItem.Title style={{fontSize: 20, fontWeight: 'bold'}}>
          개인
        </ListItem.Title>
      </ListItem>
      <ListItem style={{borderColor: 'black', borderBottomWidth: 1}}>
        <Icon name="user" size={40} color="#fce085" />
        <ListItem.Title style={{width: '75%'}}>
          <Text style={{fontSize: 20}}>회원 정보</Text>
        </ListItem.Title>
        <ListItem.Chevron size={40} />
      </ListItem>
      <ListItem>
        <Icon name="user" size={40} color="#fce085" />
        <ListItem.Title style={{width: '90%'}}>
          <Text style={{fontSize: 20}}>회원 탈퇴</Text>
        </ListItem.Title>
      </ListItem>
    </SafeAreaView>
  );
}
