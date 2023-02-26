/* eslint-disable react-native/no-inline-styles */
import {Image} from 'react-native';
import {
  FlowerGrowImage,
  FlowerType,
  IFlower,
  MAX_FLOWER_LEVEL,
} from '../../../utils/plant';
import {LevelImageProps} from './PlantLevel';

export default function Flower({
  width = 120,
  height = 120,
  level,
  type,
}: LevelImageProps) {
  if (level >= MAX_FLOWER_LEVEL) {
    return (
      <Image
        style={{width, height}}
        source={FlowerType[type as IFlower]}
        resizeMode="contain"
      />
    );
  } else {
    switch (level) {
      case 1:
      case 2:
      case 3:
      case 4:
        return (
          <Image
            style={{width: 80, height: 100}}
            source={FlowerGrowImage[level]}
            resizeMode="contain"
          />
        );
      case 5:
        return (
          <Image
            style={{width: 100, height: 120}}
            source={FlowerGrowImage[level]}
            resizeMode="contain"
          />
        );
      case 6:
        return (
          <Image
            style={{width: 120, height: 150}}
            source={FlowerGrowImage[level]}
            resizeMode="contain"
          />
        );
    }
    return (
      <Image
        style={{width, height}}
        source={FlowerGrowImage[level]}
        resizeMode="contain"
      />
    );
  }
}
