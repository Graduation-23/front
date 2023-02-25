import {atom} from 'recoil';
import {IUser} from '@api/fetchUserInfo';

const userAtom = atom<IUser | null>({
  key: 'userAtom',
  default: null,
});

export default userAtom;
