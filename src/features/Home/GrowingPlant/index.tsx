import {LevelImageProps} from '../PlantLevel';
import Tree from './Tree';
import Flower from './Flower';

interface Props extends LevelImageProps {
  kind: 'tree' | 'flower';
}

export default function GrowingPlant({kind, ...props}: Props) {
  if (kind === 'tree') {
    return <Tree {...props} />;
  } else {
    return <Flower {...props} />;
  }
}
