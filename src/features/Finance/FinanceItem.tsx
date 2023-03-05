import {StyleSheet, TouchableOpacity, View} from 'react-native';
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
    <View style={styles.Container}>
      <TouchableOpacity
        onPress={onClick}
        style={[styles.base, selected && styles.selected]}>
        <AppText.Subtitle family="round-b">{data.anothername}</AppText.Subtitle>
        <AppText family="round-b">{data.description}</AppText>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    justifyContent: 'center',
  },
  base: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  selected: {
    backgroundColor: 'lightgray',
  },
});
