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
    <>
      <AppText onPress={() => setAscending(!ascending)} family="round-b">
        {ascending === true ? '오름차순 ' : '내림차순 '}
      </AppText>
      <Icon size={30} name="sort" color="black" />
    </>
  );
}
