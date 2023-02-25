import {StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {AppText} from '@components/AppText';
import useFinance from '@/hooks/useFinance';
import {useMemo} from 'react';
import {CashFinance} from '@/constants/finance';

interface WidgetItem {
  item: Widget.ItemType;
}

export default function WidgetItem({item}: WidgetItem) {
  const {finances} = useFinance();

  const fItem = useMemo(() => {
    return finances.find(el => el.id === item.financeId) || CashFinance;
  }, [item, finances]);

  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      style={styles.itemContainer}
      colors={['#454545', '#000', '#000', '#676767']}>
      <View style={styles.box}>
        <AppText.Title
          viewStyle={styles.item}
          style={{color: '#fff'}}
          text={item.description}
        />
        <AppText
          style={{color: fItem.colorcode}}
          text={`#${fItem.anothername}`}
        />
        <AppText style={{color: '#fff'}} text={` #${item.category}`} />
      </View>
      <AppText.Subtitle
        viewStyle={styles.box}
        style={{color: '#fff'}}
        text={`- ${item.amount.toString()} ₩`}
      />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    borderWidth: 1,
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: 'gray',
    padding: 10,
    width: '100%',
  },
  box: {
    display: 'flex',
    flexDirection: 'row',
  },
  item: {
    flexGrow: 1,
  },
});
