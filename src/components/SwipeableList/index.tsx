import ListItems from '../ListItems';
import {ListItem} from '@rneui/themed';
import {AppText} from '../AppText';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {useDeleteFinance} from '../../query/finance';

interface Props {
  text: string;
  icon: string;
  label: string;
  icolor: string;
  id: number;
}

const SwipeableList = ({text, icon, label, icolor, id}: Props) => {
  const {mutateAsync: del} = useDeleteFinance();
  return (
    <>
      <ListItem.Swipeable
        rightWidth={60}
        rightContent={(): any => (
          <TouchableOpacity
            style={styles.Btn}
            onPress={() => del({financeId: id})}>
            <AppText family="round-c" style={styles.Text}>
              {text}
            </AppText>
          </TouchableOpacity>
        )}>
        <ListItems icon={icon} label={label} color={icolor} />
      </ListItem.Swipeable>
    </>
  );
};

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

export default SwipeableList;
