import {LevelImageProps} from '../PlantLevel';
import Tree from './Tree';
import Flower from './Flower';
import {StyleSheet, View} from 'react-native';

interface Props extends LevelImageProps {
  kind: 'tree' | 'flower';
}

export default function GrowingPlant({kind, ...props}: Props) {
  if (kind === 'tree') {
    return (
      <View style={styles.TreeContainer}>
        <Tree {...props} />
      </View>
    );
  } else {
    return (
      <View style={styles.FlowerContainer}>
        <Flower {...props} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  TreeContainer: {
    backgroundColor: 'white',
    marginRight: 5,
  },
  FlowerContainer: {
    backgroundColor: 'white',
    marginLeft: 5,
  },
});
