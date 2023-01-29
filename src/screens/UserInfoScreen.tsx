import {ListItem} from '@rneui/themed';
import {View, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {AppText} from '../components/AppText';
import ListItems from '../components/ListItems';
import {useState} from 'react';

const UserInfoScreen = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <SafeAreaView style={styles.Container}>
      <View style={styles.ProfileBox}>
        <View style={styles.tmp}>
          <AppText family="round-c" style={{color: 'white'}}>
            Profile
          </AppText>
        </View>
      </View>
      <View style={styles.Info}>
        <AppText family="round-c" style={{fontSize: 22}}>
          이름 OR 닉네임
        </AppText>
        <AppText family="round-c" style={{fontSize: 24}}>
          email@gmail.com
        </AppText>
        <TouchableOpacity>
          <AppText family="round-c" style={{fontSize: 18}}>
            편집
          </AppText>
        </TouchableOpacity>
      </View>
      <ScrollView style={{width: '100%'}}>
        <View style={styles.List}>
          <ListItem.Accordion
            content={
              <ListItem.Content>
                <ListItem.Title>
                  <AppText family="round-d" style={{fontSize: 22}}>
                    등록된 카드
                  </AppText>
                </ListItem.Title>
              </ListItem.Content>
            }
            isExpanded={expanded}
            onPress={() => {
              setExpanded(!expanded);
            }}>
            <ListItem.Swipeable
              rightContent={() => (
                <TouchableOpacity
                  style={{
                    height: '100%',
                    backgroundColor: 'red',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <AppText>DELETE</AppText>
                </TouchableOpacity>
              )}>
              <ListItems icon="home" label="one" color="blue" />
            </ListItem.Swipeable>
            <ListItem.Swipeable
              rightContent={() => (
                <TouchableOpacity
                  style={{
                    height: '100%',
                    backgroundColor: 'red',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <AppText>DELETE</AppText>
                </TouchableOpacity>
              )}>
              <ListItems icon="close" label="two" color="blue" />
            </ListItem.Swipeable>
            <ListItem.Swipeable
              rightContent={() => (
                <TouchableOpacity
                  style={{
                    height: '100%',
                    backgroundColor: 'red',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <AppText>DELETE</AppText>
                </TouchableOpacity>
              )}>
              <ListItems icon="crop" label="three" color="blue" />
            </ListItem.Swipeable>
            <ListItem.Swipeable
              rightContent={() => (
                <TouchableOpacity
                  style={{
                    height: '100%',
                    backgroundColor: 'red',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <AppText>DELETE</AppText>
                </TouchableOpacity>
              )}>
              <ListItems icon="bedtime" label="four" color="blue" />
            </ListItem.Swipeable>
            <ListItem.Swipeable
              rightContent={() => (
                <TouchableOpacity
                  style={{
                    height: '100%',
                    backgroundColor: 'red',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <AppText>DELETE</AppText>
                </TouchableOpacity>
              )}>
              <ListItems icon="tag" label="five" color="blue" />
            </ListItem.Swipeable>
            <ListItem.Swipeable
              rightContent={() => (
                <TouchableOpacity
                  style={{
                    height: '100%',
                    backgroundColor: 'red',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <AppText>DELETE</AppText>
                </TouchableOpacity>
              )}>
              <ListItems icon="add" label="카드 등록하기" color="blue" />
            </ListItem.Swipeable>
          </ListItem.Accordion>
          <ListItem>
            <ListItem.Title>
              <AppText family="round-d" style={{fontSize: 22}}>
                생년월일
              </AppText>
            </ListItem.Title>
            <ListItem.Content
              style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
              <AppText family="round-d" style={{fontSize: 22}}>
                2001.01.01
              </AppText>
            </ListItem.Content>
          </ListItem>
          <ListItem>
            <ListItem.Title>
              <AppText family="round-d" style={{fontSize: 22}}>
                가입일자
              </AppText>
            </ListItem.Title>
            <ListItem.Content
              style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
              <AppText family="round-d" style={{fontSize: 22}}>
                2023.01.28
              </AppText>
            </ListItem.Content>
          </ListItem>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default UserInfoScreen;

const styles = StyleSheet.create({
  Container: {
    alignItems: 'center',
    //justifyContent: 'center',
    height: '100%',
    flex: 1,
  },
  ProfileBox: {
    alignItems: 'center',
    //justifyContent: 'center',
    backgroundColor: 'black',
    marginTop: 10,
    width: '100%',
    height: '25%',
    borderColor: 'skyblue',
    borderWidth: 5,
  },
  tmp: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3f3f3f',
    width: '30%',
    height: '100%',
  },
  Info: {
    alignItems: 'center',
  },
  List: {
    width: '100%',
    //backgroundColor: 'black',
    borderColor: 'skyblue',
    borderWidth: 5,
  },
  Text: {
    color: 'gray',
    fontSize: 30,
  },
});
