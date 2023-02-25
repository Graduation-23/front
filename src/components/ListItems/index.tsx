import {ListItem} from '@rneui/themed';
import {AppText} from '../AppText';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface Props {
  icon: string;
  label: string;
  color: string;
  onPress?: () => void;
  sub?: string;
  contents?: string;
}

const ListItems = ({icon, label, color, onPress, sub, contents}: Props) => {
  return (
    <>
      <TouchableOpacity onPress={onPress} style={styles.Btn}>
        <View
          style={{
            backgroundColor: color,
            borderRadius: 8,
            marginRight: 10,
            width: 30,
          }}>
          <Icon name={icon} size={20} color="white" style={styles.Icons} />
        </View>
        <ListItem.Content>
          <ListItem.Title style={styles.Title}>
            <AppText family="round-c" style={styles.Text}>
              {label}
            </AppText>
          </ListItem.Title>
          {sub ? (
            <ListItem.Subtitle style={styles.SubTitle}>
              <AppText family="round-c" text={sub} />
            </ListItem.Subtitle>
          ) : (
            <></>
          )}
        </ListItem.Content>
        {contents ? <AppText family="round-d" text={contents} /> : <></>}
      </TouchableOpacity>
    </>
  );
};

export default ListItems;

const styles = StyleSheet.create({
  IFrame: {
    borderRadius: 8,
    marginRight: 10,
  },

  Icons: {
    padding: 5,
  },
  Btn: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  Title: {
    width: '100%',
  },
  SubTitle: {},
  Text: {
    fontSize: 25,
  },
});
