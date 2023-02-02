import {useEffect} from 'react';
import {useSetRecoilState} from 'recoil';

import {setAuthHeader} from '../api/client';
import requestRevokeToken from '../api/requestRevokeToken';
import userAtom from '../atom/userAtom';
import {getRefreshToken} from '../utils/refreshToken';

const AuthenticationSecretary = () => {
  const setUser = useSetRecoilState(userAtom);

  useEffect(() => {
    getRefreshToken().then(token => {
      requestRevokeToken(token).then(data => {
        setAuthHeader(data);
        setUser({name: 'test'});
      });
    });
  }, [setUser]);

  return <></>;
};

export default AuthenticationSecretary;
