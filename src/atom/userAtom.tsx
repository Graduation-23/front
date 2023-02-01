import {atom} from 'recoil';

type User = {name: string};

const userAtom = atom<User | null>({
  key: 'userAtom',
  default: null,
});

export default userAtom;
