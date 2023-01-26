import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AuthorizationStackParamList} from '../Navigator/AuthorizationNavigator';

const SignupScreen = ({}: NativeStackScreenProps<
  AuthorizationStackParamList,
  'Signup'
>) => {
  return <>Signup</>;
};

export default SignupScreen;
