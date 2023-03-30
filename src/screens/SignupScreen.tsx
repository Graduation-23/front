import {
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
  Platform,
  ToastAndroid,
} from 'react-native';
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
import Utils from '@/utils';

const isValid = (user: SignUpDataType) => {
  const [eRegex, pRegex, nRegex, confirmPw] = Utils.userRegex(user);

  if (!eRegex) {
    if (Platform.OS === 'android') {
      ToastAndroid.show('이메일 형식에 맞게 입력해주세요.', ToastAndroid.SHORT);
    }
  } else if (!pRegex) {
    if (Platform.OS === 'android') {
      ToastAndroid.show(
        '특수문자를 포함 5-15자로 입력해주세요.',
        ToastAndroid.SHORT,
      );
    }
  } else if (!nRegex) {
    if (Platform.OS === 'android') {
      ToastAndroid.show('닉네임 3자 이상 입력해주세요.', ToastAndroid.SHORT);
    }
  } else if (!confirmPw) {
    if (Platform.OS === 'android') {
      ToastAndroid.show('비밀번호가 일치하지 않습니다.', ToastAndroid.SHORT);
    }
  }
  return eRegex && pRegex && nRegex && confirmPw;
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
        <AppText family="round-b" text="UserEmail" />
        <PlainInput
          value={user.id}
          onChangeText={hlr.setId}
          placeholder="email@email.com"
        />
        <AppText family="round-b" text="Password" />
        <PlainInput
          value={user.password}
          onChangeText={hlr.setPassword}
          secureTextEntry={true}
          placeholder="특수문자 포함 5-15자"
        />
        <AppText family="round-b" text="Confirm Password " />
        <PlainInput
          value={user.pwForCheck}
          onChangeText={hlr.setPwForCheck}
          secureTextEntry={true}
          placeholder="특수문자 포함 5-15자"
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
        {/* <PlainButton
          title={<AppText center ul text="넘어가기" family="round-b" />}
          onPress={() => navigate(Auth.Birth)}
          // onPress={() => navigation.getParent()?.navigate('ContentNavigator')}
        /> */}
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
