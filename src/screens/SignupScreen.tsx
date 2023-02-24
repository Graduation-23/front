import {SafeAreaView, StyleSheet, View, TouchableOpacity} from 'react-native';
import {AppText} from '@components/AppText';
import PlainButton from '@components/PlainButton';
import useSignUp, {SignUpDataType} from '@hooks/useSignUp';
import signUp from '@api/signUp';
import {setAuthHeader} from '@api/client';
import fetchUserInfo from '@api/fetchUserInfo';
import {useSetRecoilState} from 'recoil';
import userAtom from '@atom/userAtom';
import {Auth} from '@constants/screen';
import {useNavigation} from '@react-navigation/native';
import PlainInput from '@/components/PlainInput';

const isValid = (user: SignUpDataType) => {
  return user.correct && user.password.length > 5;
};

const SignUpScreen = ({}: any) => {
  const setUser = useSetRecoilState(userAtom);
  const {user, hlr, getUser} = useSignUp();
  const {navigate} = useNavigation<any>();

  const handleSignUp = () => {
    if (isValid(user)) {
      signUp(getUser()).then(token => {
        setAuthHeader(token);
        fetchUserInfo(true).then(setUser);
      });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleStyle}>
        <AppText.Title text="Sign Up" family="round-d" />
      </View>

      <View style={styles.fullWidth}>
        <AppText family="round-b" text="UserID" />
        <PlainInput
          value={user.id}
          onChangeText={hlr.setId}
          placeholder="3자 이상"
        />
        <AppText family="round-b" text="Password" />
        <PlainInput
          value={user.password}
          onChangeText={hlr.setPassword}
          secureTextEntry={true}
          placeholder="8자 이상, 특수문자 포함"
        />
        <AppText family="round-b" text="Confirm Password " />
        <PlainInput
          value={user.pwForCheck}
          onChangeText={hlr.setPwForCheck}
          secureTextEntry={true}
          placeholder="8자 이상, 특수문자 포함"
        />
        <AppText family="round-b" text="Nickname" />
        <PlainInput
          value={user.nickname}
          onChangeText={hlr.setNickname}
          placeholder="3자 이상"
        />
        <TouchableOpacity onPress={handleSignUp} style={styles.btn}>
          <AppText.Subtitle family="round-d" text="Sign Up" />
        </TouchableOpacity>
      </View>

      <View style={styles.additionalLinkView}>
        <PlainButton
          title={<AppText center ul text="로그인" family="round-b" />}
          onPress={() => navigate(Auth.Login)}
        />
        <PlainButton
          title={<AppText center ul text="넘어가기" family="round-b" />}
          onPress={() => navigate(Auth.Birth)}
          // onPress={() => navigation.getParent()?.navigate('ContentNavigator')}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  additionalLinkView: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  fullWidth: {
    overflow: 'hidden',
    width: '70%',
  },
  btn: {
    backgroundColor: '#bbdefb',
    padding: 6,
    borderRadius: 10,
    borderWidth: 0,
    marginBottom: 20,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleStyle: {
    marginBottom: 40,
  },
});

export default SignUpScreen;
