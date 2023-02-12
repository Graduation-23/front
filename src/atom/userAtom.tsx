import {atom} from 'recoil';
import {IUser} from '../api/fetchUserInfo';

const userAtom = atom<IUser | null>({
  key: '',
  default: null,
});

export default userAtom;
