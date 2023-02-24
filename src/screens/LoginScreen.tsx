import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useSetRecoilState} from 'recoil';
import {setAuthHeader} from '@api/client';
import fetchUserInfo from '@api/fetchUserInfo';
import signIn from '@api/signIn';
import userAtom from '@atom/userAtom';
import {AppText} from '@components/AppText';
import ExternalLinkButton from '@components/ExternalLinkButton';
import PlainButton from '@components/PlainButton';
import {Auth} from '@constants/screen';
import useSignIn from '@hooks/useSingIn';
import {AuthorizationStackParamList} from '../Navigator/AuthorizationNavigator';
import {Divider} from '@rneui/themed';
import google from '../assets/google.png';
import PlainInput from '@/components/PlainInput';

const LoginScreen = ({
  navigation,
}: NativeStackScreenProps<AuthorizationStackParamList, 'Login'>) => {
  const setUser = useSetRecoilState(userAtom);
  const {auth, hlr} = useSignIn();

  const handleSignIn = () => {
    signIn(auth).then(data => {
      setAuthHeader(data);
      fetchUserInfo().then(setUser);
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleStyle}>
        <AppText.Title text="Login" family="round-d" />
      </View>

      <View style={styles.fullWidth}>
        <PlainInput value={auth.id} onChangeText={hlr.setId} placeholder="ID" />
        <PlainInput
          value={auth.password}
          onChangeText={hlr.setPassword}
          secureTextEntry={true}
          placeholder="PASSWORD"
        />
        <TouchableOpacity onPress={handleSignIn} style={styles.btn}>
          <AppText.Subtitle family="round-d" text="Sign In" />
        </TouchableOpacity>
        <Divider width={2} style={styles.horizontalLine} color="black" />
      </View>

      <View style={styles.socialView}>
        <ExternalLinkButton url="http://account-diary.kro.kr:8080/api/auth/google/uri">
          <Image source={google} style={styles.img} />
          <AppText text="Google 계정으로 계속하기" family="round-b" />
        </ExternalLinkButton>
      </View>

      <View style={styles.additionalLinkView}>
        <PlainButton
          title={<AppText center ul text="회원가입" family="round-b" />}
          onPress={() => navigation.navigate(Auth.SignUp)}
        />
        {/* <PlainButton
          title={<AppText center ul text="넘어가기" family="round-b" />}
          onPress={() => navigation.getParent()?.navigate(Entry.Content)}
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
  socialView: {
    margin: 10,
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
  img: {
    height: 25,
    width: 25,
  },
  horizontalLine: {
    marginTop: 10,
    marginBottom: 20,
  },
  fullWidth: {
    overflow: 'hidden',
    width: '70%',
  },
  titleStyle: {
    marginBottom: 40,
  },
});

export default LoginScreen;
