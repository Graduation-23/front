import {StyleSheet, TouchableOpacity} from 'react-native';
import {AppText} from '@components/AppText';
import {IFinance} from '@type/api';

type FinanceItemProps = {
  onClick(): void;
  selected?: boolean;
  data: IFinance;
};

export default function FinanceItem({
  onClick,
  selected = false,
  data,
}: FinanceItemProps) {
  return (
    <TouchableOpacity
      onPress={onClick}
      style={[styles.base, selected && styles.selected]}>
      <AppText.Title>{data.anothername}</AppText.Title>
      <AppText>{data.description}</AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  base: {},
  selected: {},
});
