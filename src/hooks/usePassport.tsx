import {useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {useRecoilValue} from 'recoil';
import userAtom from '@atom/userAtom';
import {Auth, Content, Entry} from '@constants/screen';

export default function usePassport() {
  const [isJustChange, setIsJustChange] = useState(false);
  const {navigate} = useNavigation<any>();
  const user = useRecoilValue(userAtom);
  useEffect(() => {
    if (user && isJustChange) {
      return;
    }

    setTimeout(() => {
      if (user) {
        setIsJustChange(true);
        if (user.fresh) {
          navigate(Entry.Auth, {screen: Auth.Birth});
        } else {
          navigate(Entry.Content, {screen: Content.HomeTab});
        }
        // navigate(user.fresh ? Entry.Auth : Entry.Content, {to: Auth.Birth});
      } else {
        setIsJustChange(false);
        navigate(Entry.Auth, {screen: Auth.Login});
      }
    }, 500);
  }, [user, navigate, isJustChange]);
}
