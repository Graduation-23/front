import useInitializeUser from '../hooks/useInitializeUser';
import usePassport from '../hooks/usePassport';

const AuthenticationSecretary = () => {
  useInitializeUser();
  usePassport();

  return <></>;
};

export default AuthenticationSecretary;
