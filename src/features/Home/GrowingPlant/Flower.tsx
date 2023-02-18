import {Image} from 'react-native';
import {
  FlowerImage,
  FlowerType,
  IFlower,
  MAX_FLOWER_LEVEL,
} from '../../../utils/plant';
import {LevelImageProps} from '../PlantLevel';

export default function Flower({
  width = 100,
  height = 120,
  level,
  type,
}: LevelImageProps) {
  if (level >= MAX_FLOWER_LEVEL) {
    return (
      <Image style={{width, height}} source={FlowerType[type as IFlower]} />
    );
  }
  return <Image style={{width, height}} source={FlowerImage[level]} />;
}
