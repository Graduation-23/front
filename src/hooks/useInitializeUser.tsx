import {useEffect} from 'react';
import {useSetRecoilState} from 'recoil';
import fetchUserInfo from '@api/fetchUserInfo';
import userAtom from '@atom/userAtom';
import {initializeToken} from '@utils/token';

export default function useInitializeUser() {
  const setUser = useSetRecoilState(userAtom);

  useEffect(() => {
    initializeToken().then(() => {
      fetchUserInfo().then(setUser);
    });
  }, [setUser]);
}
