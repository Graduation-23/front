import {atom} from 'recoil';

const flowerLevelAtom = atom<number>({
  key: 'flowerLevelAtom',
  default: 1,
});

export default flowerLevelAtom;
