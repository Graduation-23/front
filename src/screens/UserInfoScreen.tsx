import {Text} from '@rneui/themed';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {AppText} from '../components/AppText';

const UserInfoScreen = () => {
  return (
    <SafeAreaView style={styles.Container}>
      <View style={styles.ProfileBox}>
        <View style={styles.tmp}>
          <Text style={{color: 'white'}}>Profile</Text>
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
      <View style={styles.List}>
        <AppText family="round-c" style={{fontSize: 28, color: 'white'}}>
          리스트 들어갈거예요
        </AppText>
      </View>
    </SafeAreaView>
  );
};

export default UserInfoScreen;

const styles = StyleSheet.create({
  Container: {
    alignItems: 'center',
    //justifyContent: 'center',
  },
  ProfileBox: {
    alignItems: 'center',
    //justifyContent: 'center',
    backgroundColor: 'black',
    marginTop: 10,
    width: '100%',
    height: '40%',
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
    backgroundColor: 'black',
    borderColor: 'skyblue',
    borderWidth: 5,
  },
  Text: {
    color: 'gray',
    fontSize: 30,
  },
});
