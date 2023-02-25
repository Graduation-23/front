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
    if (isJustChange) {
      return;
    }

    setTimeout(() => {
      if (user) {
        navigate(user.fresh ? Auth.Birth : Entry.Content);
        setIsJustChange(true);
      } else {
        navigate(Auth.Login);
      }
    }, 100);
  }, [user, navigate, isJustChange]);
}
