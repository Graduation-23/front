import {ListItem} from '@rneui/themed';
import {AppText} from '../AppText';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
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
        <View
          style={{
            backgroundColor: color,
            borderRadius: 8,
          }}>
          <Icon name={icon} size={20} color="white" style={styles.Icons} />
        </View>
        <ListItem.Subtitle style={styles.Subtitle}>
          <AppText family="round-c" style={styles.Text}>
            {label}
          </AppText>
        </ListItem.Subtitle>
      </ListItem>
    </TouchableOpacity>
  );
};

export default ListItems;

const styles = StyleSheet.create({
  Icons: {
    padding: 5,
  },
  Subtitle: {
    width: '85%',
  },
  Text: {
    fontSize: 25,
  },
});
