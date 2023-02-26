import {atom} from 'recoil';
import {TreeImage} from '@/utils/plant';

const treeAtom = atom<string>({
  key: 'treeAtom',
  default: TreeImage[0],
});

export default treeAtom;
