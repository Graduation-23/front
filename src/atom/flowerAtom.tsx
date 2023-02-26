import {atom} from 'recoil';
import {FlowerImage, IFlower, ITree} from '@/utils/plant';

const flowerAtom = atom<IFlower | ITree>({
  key: 'flowerAtom',
  default: FlowerImage[0],
});

export default flowerAtom;
