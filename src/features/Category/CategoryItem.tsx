import {StyleSheet, TouchableOpacity} from 'react-native';
import {AppText} from '../../components/AppText';

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
    <TouchableOpacity
      onPress={onClick}
      style={[styles.base, selected && styles.selected]}>
      <AppText.Title>{tag}</AppText.Title>
      <AppText>{description}</AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  base: {},
  selected: {},
});
