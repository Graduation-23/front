import {StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {AppText} from './AppText';

interface OrderByButtonProps {
  ascending: boolean;
  setAscending(ascending: boolean): void;
}

export default function OrderByButton({
  ascending,
  setAscending,
}: OrderByButtonProps) {
  return (
    <TouchableOpacity
      style={styles.toolbar}
      onPress={() => setAscending(!ascending)}>
      <AppText family="round-b">
        {ascending === true ? '오름차순 ' : '내림차순 '}
      </AppText>
      <Icon size={30} name="sort" color="black" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  toolbar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});
