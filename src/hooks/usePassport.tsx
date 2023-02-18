import {useNavigation} from '@react-navigation/native';
import {useEffect} from 'react';
import {useRecoilValue} from 'recoil';
import userAtom from '@atom/userAtom';
import {Auth, Entry} from '@constants/screen';

export default function usePassport() {
  const {navigate} = useNavigation<any>();
  const user = useRecoilValue(userAtom);
  useEffect(() => {
    setTimeout(() => {
      if (user) {
        navigate(user.fresh ? Auth.Birth : Entry.Content);
      } else {
        navigate(Entry.Auth);
      }
    }, 100);
  }, [user, navigate]);
}
