import {atom} from 'recoil';
import {ITree} from '@/utils/plant';

const treeAtom = atom<ITree[] | null>({
  key: 'treeAtom',
  default: null,
});

export default treeAtom;
