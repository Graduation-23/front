import {
  Platform,
  StyleSheet,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import {AppText} from '@components/AppText';
import CategoryIcons from './CategoryIcons';
//import {Divider} from '@rneui/themed';

type CategoryItemProps = {
  onClick(): void;
  tag: string;
  description: string;
  selected?: boolean;
};

export default function CategoryItem({
  onClick,
  tag,
  description,
  selected = false,
}: CategoryItemProps) {
  return (
    <View style={styles.Container}>
      <TouchableOpacity
        onPress={() => {
          onClick();
          if (Platform.OS === 'android') {
            ToastAndroid.show(`${description}`, ToastAndroid.SHORT);
          }
        }}
        style={[styles.base, selected && styles.selected]}>
        <View style={styles.Icons}>
          <CategoryIcons tag={tag} />
        </View>
        <AppText center style={styles.FontSize16} family="round-b">
          {tag}
        </AppText>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    width: '30%',
  },
  base: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignItems: 'center',
  },
  selected: {
    backgroundColor: 'lightgray',
  },
  Icons: {
    marginTop: 10,
  },
  FontSize16: {
    fontSize: 22,
    marginTop: 15,
  },
});
