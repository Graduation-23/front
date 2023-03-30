import Utils from '@/utils';
import {atom} from 'recoil';

const treeLevelAtom = atom<number>({
  key: 'treeLevelAtom',
  default: Utils.transformTreeLevel(),
});

export default treeLevelAtom;
