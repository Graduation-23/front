import {useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {useRecoilValue} from 'recoil';
import userAtom from '@atom/userAtom';
import {Auth, Entry} from '@constants/screen';

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
        console.log(user);
        navigate(user.fresh ? Entry.Auth : Entry.Content, {to: Auth.Birth});
      } else {
        setIsJustChange(false);
        navigate(Entry.Auth);
      }
    }, 500);
  }, [user, navigate, isJustChange]);
}
