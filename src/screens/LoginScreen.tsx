import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Button, Input} from '@rneui/base';

import {SafeAreaView, StyleSheet, View} from 'react-native';
import {useSetRecoilState} from 'recoil';
import signIn from '../api/signIn';
import userAtom from '../atom/userAtom';
import {AppText} from '../components/AppText';
import ExternalLinkButton from '../components/ExternalLinkButton';
import PlainButton from '../components/PlainButton';
import useSignIn from '../hooks/useSingIn';
import {AuthorizationStackParamList} from '../Navigator/AuthorizationNavigator';

const LoginScreen = ({
  navigation,
}: NativeStackScreenProps<AuthorizationStackParamList, 'Login'>) => {
  const setUser = useSetRecoilState(userAtom);
  const {auth, hlr} = useSignIn();

  const handleSignIn = () => {
    signIn(auth).then(data => {
      setUser(data);
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleStyle}>
        <AppText.Title text="Login Screen" family="round-d" />
      </View>

      <View style={styles.fullWidth}>
        <Input
          value={auth.id}
          onChangeText={hlr.setId}
          inputStyle={styles.input}
          label={<AppText text="아이디" />}
          placeholder="아이디 입력..."
        />
        <Input
          value={auth.password}
          onChangeText={hlr.setPassword}
          inputStyle={styles.input}
          label={<AppText text="비밀번호" />}
          secureTextEntry={true}
          placeholder="비밀번호 입력..."
        />
        <Button onPress={handleSignIn}>로그인</Button>
      </View>

      <View style={styles.socialView}>
        <ExternalLinkButton url="http://account-diary.kro.kr:8080/api/auth/google/uri">
          <AppText center text="Sign in using Google" />
        </ExternalLinkButton>
      </View>

      <View style={styles.additionalLinkView}>
        <PlainButton
          title={<AppText center ul text="회원가입" />}
          onPress={() => navigation.navigate('Signup')}
        />
        <PlainButton
          title={<AppText center ul text="넘어가기" />}
          onPress={() => navigation.getParent()?.navigate('ContentNavigator')}
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
  socialView: {
    margin: 10,
  },
  input: {
    backgroundColor: 'white',
    padding: 6,
  },
  fullWidth: {
    overflow: 'hidden',
    width: 350,
  },
  titleStyle: {
    marginBottom: 40,
    marginTop: -75,
  },
});

export default LoginScreen;