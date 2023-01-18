import {ListItem} from '@rneui/themed';
import {Text} from '@rneui/base';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

interface Props {
  icon: string;
  label: string;
  color: string;
  onPress?: () => void;
}

const ListItems = ({icon, label, color, onPress}: Props) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <ListItem>
        <Icon name={icon} size={40} color={color} />
        <ListItem.Subtitle style={styles.Subtitle}>
          <Text style={styles.Text}>{label}</Text>
        </ListItem.Subtitle>
      </ListItem>
    </TouchableOpacity>
  );
};

export default ListItems;

const styles = StyleSheet.create({
  Subtitle: {
    width: '85%',
  },
  Text: {
    fontSize: 20,
  },
});
