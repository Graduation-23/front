import {useNavigation} from '@react-navigation/native';
import {useEffect} from 'react';
import {useRecoilValue} from 'recoil';
import userAtom from '../atom/userAtom';

export default function usePassport() {
  const {navigate} = useNavigation<any>();
  const user = useRecoilValue(userAtom);
  useEffect(() => {
    if (user) {
      navigate(user.fresh ? 'Birth' : 'ContentNavigator');
    } else {
      navigate('AuthorizationNavigator');
    }
  }, [user, navigate]);
}
