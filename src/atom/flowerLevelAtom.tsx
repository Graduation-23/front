import Utils from '@/utils';
import {atom} from 'recoil';

const flowerLevelAtom = atom<number>({
  key: 'flowerLevelAtom',
  default: Utils.transformFlowerLevel(),
});

export default flowerLevelAtom;
