import {ListItem} from '@rneui/themed';
import {View, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {AppText} from '../components/AppText';
import {useState} from 'react';
import SwipeableList from '../components/SwipeableList';
import {useRecoilValue} from 'recoil';
import userAtom from '../atom/userAtom';

const UserInfoScreen = () => {
  const [expanded, setExpanded] = useState(false);
  const user = useRecoilValue(userAtom);

  return (
    <SafeAreaView style={styles.Container}>
      {/**Header (Profile) */}
      <View style={styles.ProfileBox}>
        <View style={styles.Profile}>
          <AppText family="round-c" style={{color: 'white'}}>
            Profile
          </AppText>
        </View>
      </View>
      <View style={styles.Info}>
        <TouchableOpacity>
          <AppText family="round-c" text="✏편집" />
        </TouchableOpacity>
        <AppText family="round-b" text={`${user?.nickname}님`} />
        <AppText family="round-b" text={`id : ${user?.id}`} />
      </View>

      {/**ScrollView (Card, Birth, Created) */}
      <ScrollView style={{width: '100%'}}>
        <View style={styles.List}>
          <ListItem.Accordion
            content={
              <ListItem.Content>
                <ListItem.Title>
                  <AppText family="round-d" text="등록된 카드" />
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
          </ListItem.Accordion>
          <ListItem>
            <ListItem.Title>
              <AppText family="round-d" text="생년월일" />
            </ListItem.Title>
            <ListItem.Content style={styles.AlignRight}>
              <AppText family="round-d" text={`${user?.nickname}`} />
            </ListItem.Content>
          </ListItem>
          <ListItem>
            <ListItem.Title>
              <AppText family="round-d" text="가입일자" />
            </ListItem.Title>
            <ListItem.Content style={styles.AlignRight}>
              <AppText family="round-d" text={`${user?.created}`} />
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
    marginTop: 20,
    width: '100%',
    height: '20%',
  },
  Profile: {
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
