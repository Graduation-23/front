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
      colors={['#89bad7cc', '#74b3d8cc']}>
      <View style={styles.box}>
        <AppText.Subtitle
          viewStyle={styles.item}
          family="round-b"
          text={item.description}
        />
        <View style={{flexDirection: 'row'}}>
          <AppText
            style={{color: fItem.colorcode}}
            family="round-b"
            text={`#${fItem.anothername}`}
          />
          <AppText text={` #${item.category}`} family="round-b" />
        </View>
      </View>
      <AppText
        viewStyle={styles.box}
        text={` ${item.amount.toLocaleString()} 원`}
        family="round-b"
      />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    marginBottom: 10,
    borderRadius: 10,
    padding: 10,
    width: '100%',
  },
  box: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 5,
    justifyContent: 'space-between',
  },
  item: {
    flexGrow: 1,
  },
});
