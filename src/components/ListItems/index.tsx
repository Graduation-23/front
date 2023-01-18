import {ListItem} from '@rneui/themed';
import {Text} from '@rneui/base';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

interface Props {
  icon: string;
  label: string;
}

const ListItems = ({icon, label}: Props) => {
  return (
    <ListItem style={styles.Border}>
      <Icon name={icon} size={40} color="#fce085" />
      <ListItem.Subtitle style={styles.Subtitle}>
        <Text style={styles.Text}>{label}</Text>
      </ListItem.Subtitle>
      <ListItem.Chevron size={40} />
    </ListItem>
  );
};

export default ListItems;

const styles = StyleSheet.create({
  Border: {
    borderColor: 'black',
    borderBottomWidth: 1,
  },
  Subtitle: {
    width: '75%',
  },
  Text: {
    fontSize: 20,
  },
});
