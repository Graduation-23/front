import {atom} from 'recoil';

const treeLevelAtom = atom<number>({
  key: 'treeLevelAtom',
  default: 1,
});

export default treeLevelAtom;
