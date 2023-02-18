import {Image} from 'react-native';
import {ITree, MAX_TREE_LEVEL, TreeImage, TreeType} from '../../../utils/plant';
import {LevelImageProps} from '../PlantLevel';

export default function Tree({
  width = 250,
  height = 400,
  level,
  type,
}: LevelImageProps) {
  if (level >= MAX_TREE_LEVEL) {
    return <Image style={{width, height}} source={TreeType[type as ITree]} />;
  }
  return <Image style={{width, height}} source={TreeImage[level]} />;
}
