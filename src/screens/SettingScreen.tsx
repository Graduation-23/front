import {useState} from 'react';
import {Text} from '@rneui/base';
import {SafeAreaView} from 'react-native';
import {ListItem} from '@rneui/themed';

export default function SettingScreen() {
  const [text, setText] = useState('왕');
  return (
    <SafeAreaView style={{alignItems: 'center', justifyContent: 'center'}}>
      <ListItem.Title style={{backgroundColor: 'skyblue', width: '100%'}}>
        <Text>제목</Text>
        <ListItem.Subtitle>
          <Text>서브</Text>
          <ListItem.Content>
            <Text>아아ㅏ아아ㅏ</Text>
          </ListItem.Content>
        </ListItem.Subtitle>
      </ListItem.Title>

      <ListItem.Subtitle
        style={{width: '100%', backgroundColor: 'pink'}}
        onPress={() => {
          setText('냥?');
        }}>
        <Text>{text}</Text>
      </ListItem.Subtitle>
      <Text>안뇽!</Text>
    </SafeAreaView>
  );
}
