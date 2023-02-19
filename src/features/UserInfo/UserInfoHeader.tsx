import {View, StyleSheet} from 'react-native';
import {AppText} from '../../components/AppText';
import {useRecoilValue} from 'recoil';
import userAtom from '../../atom/userAtom';
import UserInfoProfile from './UserInfoProfile';

interface UserInfoHeaderProps {}

export default function UserInfoHeader({}: UserInfoHeaderProps) {
  const user = useRecoilValue(userAtom);
  return (
    <>
      <View style={styles.ProfileContainer}>
        <View style={styles.Profile}>
          <UserInfoProfile />
        </View>
      </View>
      <View style={styles.Info}>
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
    borderWidth: 2,
    borderColor: 'black',
    width: 110,
    height: 110,
  },
  Info: {
    alignItems: 'center',
  },
});
