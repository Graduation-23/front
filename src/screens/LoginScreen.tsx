import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Button} from '@rneui/base';
import {SafeAreaView} from 'react-native';
import {AppText} from '../components/AppText';
import {AuthorizationStackParamList} from '../Navigator/AuthorizationNavigator';

const LoginScreen = ({
  navigation,
}: NativeStackScreenProps<AuthorizationStackParamList, 'Login'>) => {
  return (
    <SafeAreaView>
      <AppText>Login Screen</AppText>
      <Button onPress={() => navigation.navigate('Signup')}>Go Sign up</Button>
      <Button
        onPress={() => navigation.getParent()?.navigate('ContentNavigator')}>
        Go Content
      </Button>
    </SafeAreaView>
  );
};

export default LoginScreen;
