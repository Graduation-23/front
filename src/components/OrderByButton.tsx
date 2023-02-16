import {Text} from '@rneui/base';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface OrderByButtonProps {
  ascending: boolean;
  setAscending(ascending: boolean): void;
}

export default function OrderByButton({
  ascending,
  setAscending,
}: OrderByButtonProps) {
  return (
    <Text onPress={() => setAscending(!ascending)}>
      <Icon size={30} name="sort" />
    </Text>
  );
}
