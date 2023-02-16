import {View, StyleSheet} from 'react-native';
import {AppText} from '../../components/AppText';
import {TouchableOpacity} from 'react-native';
import {useRecoilValue} from 'recoil';
import userAtom from '../../atom/userAtom';

interface UserInfoHeaderProps {}

export default function UserInfoHeader({}: UserInfoHeaderProps) {
  const user = useRecoilValue(userAtom);
  return (
    <>
      <View style={styles.ProfileContainer}>
        <View style={styles.Profile}>
          <AppText family="round-c" text="Profile" />
        </View>
      </View>
      <View style={styles.Info}>
        <TouchableOpacity>
          <AppText
            family="round-c"
            text="✏편집"
            onPress={() => console.log('Todo : 이미지 추가')}
          />
        </TouchableOpacity>
        <AppText family="round-b" text={`${user?.nickname}님`} />
        <AppText family="round-b" text={`id : ${user?.id}`} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  ProfileContainer: {
    alignItems: 'center',
    marginTop: 20,
    width: '100%',
    height: '20%',
  },
  Profile: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    width: '30%',
    height: '100%',
  },
  Info: {
    alignItems: 'center',
  },
});
