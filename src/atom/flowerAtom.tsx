import {atom} from 'recoil';
import {FlowerImage} from '@/utils/plant';

const flowerAtom = atom<string>({
  key: 'flowerAtom',
  default: FlowerImage[0],
});

export default flowerAtom;
