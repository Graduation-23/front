import ListItems from '../../components/ListItems';
import {ListItem} from '@rneui/themed';
import {AppText} from '../../components/AppText';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {useState} from 'react';
import UserInfoDeleteCardDialog from './UserInfoDeleteCardDialog';

interface Props {
  icon: string;
  label: string;
  icolor: string;
  id: number;
}

export default function UserInfoCardList({icon, label, icolor, id}: Props) {
  const [visible, setVisible] = useState(false);

  const toggleDialog = () => {
    setVisible(!visible);
  };

  return (
    <>
      <ListItem.Swipeable
        rightWidth={60}
        rightContent={(): any => (
          <TouchableOpacity style={styles.Btn} onPress={() => toggleDialog()}>
            <AppText family="round-c" style={styles.Text}>
              Delete
            </AppText>
          </TouchableOpacity>
        )}>
        <ListItems icon={icon} label={label} color={icolor} />
      </ListItem.Swipeable>
      <UserInfoDeleteCardDialog
        visible={visible}
        toggleDialog={toggleDialog}
        id={id}
      />
    </>
  );
}

const styles = StyleSheet.create({
  Btn: {
    height: '100%',
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Text: {
    fontSize: 22,
  },
});
