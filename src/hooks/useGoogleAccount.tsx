import {useEffect} from 'react';
import {useSetRecoilState} from 'recoil';
import {setAuthHeader} from '@api/client';
import fetchUserInfo from '@api/fetchUserInfo';
import userAtom from '@atom/userAtom';

export default function useGoogleAccount(params: {
  error: 'true' | 'false';
  access: string;
  refresh: string;
  fresh: 'true' | 'false';
}) {
  const setUser = useSetRecoilState(userAtom);

  useEffect(() => {
    if (params && params.error === 'false') {
      setAuthHeader({access: params.access, refresh: params.refresh});
      fetchUserInfo(params.fresh === 'true').then(setUser);
    }
  }, [setUser, params]);
}
