import {ListItem} from '@rneui/themed';
import {View, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {AppText} from '@components/AppText';
import {useState} from 'react';
import SwipeableList from '@components/SwipeableList';
import {AppTextTitle} from '@components/AppText/AppTextTitle';

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
                  <AppTextTitle family="round-d">등록된 카드</AppTextTitle>
                </ListItem.Title>
              </ListItem.Content>
            }
            isExpanded={expanded}
            onPress={() => {
              setExpanded(!expanded);
            }}>
            <SwipeableList
              text="Delete"
              icon="home"
              label="one"
              icolor="green"
            />
            <SwipeableList
              text="Delete"
              icon="close"
              label="two"
              icolor="orange"
            />
            <SwipeableList
              text="Delete"
              icon="bedtime"
              label="three"
              icolor="lightgreen"
            />
            <SwipeableList
              text="Delete"
              icon="crop"
              label="four"
              icolor="violet"
            />
            <SwipeableList
              text="Delete"
              icon="edit"
              label="five"
              icolor="brown"
            />
            <SwipeableList
              text="Delete"
              icon="add"
              label="카드 추가하기"
              icolor="black"
            />
          </ListItem.Accordion>
          <ListItem>
            <ListItem.Title>
              <AppTextTitle family="round-d">생년월일</AppTextTitle>
            </ListItem.Title>
            <ListItem.Content style={styles.AlignRight}>
              <AppText family="round-d" style={styles.Size22}>
                2001.01.01
              </AppText>
            </ListItem.Content>
          </ListItem>
          <ListItem>
            <ListItem.Title>
              <AppTextTitle family="round-d">가입일자</AppTextTitle>
            </ListItem.Title>
            <ListItem.Content style={styles.AlignRight}>
              <AppText family="round-d" style={styles.Size22}>
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
    height: '100%',
    flex: 1,
  },
  ProfileBox: {
    alignItems: 'center',
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
    borderColor: 'skyblue',
    borderWidth: 5,
  },
  Text: {
    color: 'gray',
    fontSize: 30,
  },
  Size22: {
    fontSize: 22,
  },
  AlignRight: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});
