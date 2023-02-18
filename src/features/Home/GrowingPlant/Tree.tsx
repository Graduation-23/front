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
  } else {
    switch (level) {
      case 1:
        return (
          <Image style={{width: 100, height: 120}} source={TreeImage[level]} />
        );
      default:
        return (
          <Image style={{width, height}} source={TreeType[type as ITree]} />
        );
    }
  }
}
