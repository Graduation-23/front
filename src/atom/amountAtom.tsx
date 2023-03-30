import {atom} from 'recoil';

const amountAtom = atom<number | null>({
  key: 'amountAtom',
  default: 0,
});

export default amountAtom;
