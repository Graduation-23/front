import {IFlower, ITree} from '../../utils/plant';

export type LevelImageProps = {
  type: IFlower | ITree;
  level: number;
  width?: number;
  height?: number;
};
