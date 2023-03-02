/* eslint-disable react-native/no-inline-styles */
import {Image} from 'react-native';
import {
  ITree,
  MAX_TREE_LEVEL,
  TreeGrowImage,
  TreeType,
} from '../../../utils/plant';
import {LevelImageProps} from './PlantLevel';

export default function Tree({
  width = 250,
  height = 250,
  level,
  type,
}: LevelImageProps) {
  if (level >= MAX_TREE_LEVEL) {
    return (
      <Image
        style={{width, height}}
        source={TreeType[type as ITree]}
        resizeMode="contain"
      />
    );
  } else {
    switch (level) {
      case 1:
      case 2:
        return (
          <Image
            style={{width: 100, height: 100}}
            source={TreeGrowImage[level]}
            resizeMode="contain"
          />
        );
      case 3:
        return (
          <Image
            style={{width: 150, height: 150}}
            source={TreeGrowImage[level]}
            resizeMode="contain"
          />
        );
      case 4:
      case 5:
        return (
          <Image
            style={{width: 170, height: 250}}
            source={TreeGrowImage[level]}
            resizeMode="contain"
          />
        );
      case 6:
        return (
          <Image
            style={{width: 180, height: 250}}
            source={TreeGrowImage[level]}
            resizeMode="contain"
          />
        );

      default:
        return (
          <Image
            style={{width: 250, height: 250}}
            source={TreeGrowImage[level]}
            resizeMode="contain"
          />
        );
    }
  }
}
