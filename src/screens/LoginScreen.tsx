import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Button, Input} from '@rneui/base';

import {SafeAreaView, StyleSheet, View} from 'react-native';
import {AppText} from '../components/AppText';
import ExternalLinkButton from '../components/ExternalLinkButton';
import PlainButton from '../components/PlainButton';
import {AuthorizationStackParamList} from '../Navigator/AuthorizationNavigator';

const LoginScreen = ({
  navigation,
}: NativeStackScreenProps<AuthorizationStackParamList, 'Login'>) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleStyle}>
        <AppText.Title text="Login Screen" family="round-d" />
      </View>

      <View style={styles.fullWidth}>
        <Input
          inputStyle={styles.input}
          label={<AppText text="아이디" />}
          placeholder="아이디 입력..."
        />
        <Input
          inputStyle={styles.input}
          label={<AppText text="비밀번호" />}
          secureTextEntry={true}
          placeholder="비밀번호 입력..."
        />
        <Button>로그인</Button>
      </View>

      <View style={styles.socialView}>
        <ExternalLinkButton url="http://account-diary.kro.kr:8080/auth/google/uri">
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
