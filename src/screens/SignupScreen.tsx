import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {AuthorizationStackParamList} from '../Navigator/AuthorizationNavigator';
import {Button, Input} from '@rneui/base';

import {SafeAreaView, StyleSheet, View} from 'react-native';
import {AppText} from '../components/AppText';
import PlainButton from '../components/PlainButton';
import useSignUp from '../hooks/useSignUp';
import signUp from '../api/signUp';

const SignupScreen = ({
  navigation,
}: NativeStackScreenProps<AuthorizationStackParamList, 'Signup'>) => {
  const {user, hlr, getUser} = useSignUp();

  const handleSignUp = () => {
    if (user.correct && user.password.length > 5) {
      signUp(getUser()).then(console.log);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleStyle}>
        <AppText.Title text="Sign Up Screen" family="round-d" />
      </View>

      <View style={styles.fullWidth}>
        <Input
          value={user.id}
          onChangeText={hlr.setId}
          inputStyle={styles.input}
          label={<AppText text="아이디" />}
          placeholder="아이디 입력..."
        />
        <Input
          value={user.password}
          onChangeText={hlr.setPassword}
          inputStyle={styles.input}
          label={<AppText text="비밀번호" />}
          secureTextEntry={true}
          placeholder="비밀번호 입력..."
        />
        <Input
          value={user.pwForCheck}
          onChangeText={hlr.setPwForCheck}
          inputStyle={styles.input}
          label={<AppText text="비밀번호 확인" />}
          secureTextEntry={true}
          placeholder="비밀번호 재입력..."
        />
        <Input
          value={user.nickname}
          onChangeText={hlr.setNickname}
          inputStyle={styles.input}
          label={<AppText text="닉네임" />}
          placeholder="닉네임 입력..."
        />
        <Button onPress={handleSignUp}>회원가입</Button>
      </View>

      <View style={styles.additionalLinkView}>
        <PlainButton
          title={<AppText center ul text="로그인" />}
          onPress={() => navigation.navigate('Login')}
        />
        <PlainButton
          title={<AppText center ul text="넘어가기" />}
          onPress={() => navigation.navigate('Birth')}
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

export default SignupScreen;
