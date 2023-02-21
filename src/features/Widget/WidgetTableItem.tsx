import Utils from '@/utils';
import {Input} from '@rneui/base';
import {StyleSheet, View} from 'react-native';
import useFinance from '@hooks/useFinance';
import {useMemo} from 'react';
import {AppText} from '@/components/AppText';
import {CashFinance} from '@/constants/finance';
import LinearGradient from 'react-native-linear-gradient';

interface WidgetTableItem extends Widget.ItemType {
  setItem(item: Widget.ItemType): void;
  openCategoryDialog(): void;
  openFinanceDialog(): void;
}

export function WidgetTableItem({
  setItem,
  openCategoryDialog,
  openFinanceDialog,
  ...item
}: WidgetTableItem) {
  const {finances} = useFinance();

  const set = (key: keyof Widget.ItemType, value: any) => {
    setItem({...item, [key]: value});
  };

  const fItem = useMemo(() => {
    return finances.find(el => el.id === item.financeId) || CashFinance;
  }, [finances, item.financeId]);

  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      style={styles.itemContainer}
      colors={['#454545', '#000', '#000', '#676767']}>
      <View style={styles.box}>
        <View style={{flexGrow: 1}}>
          <Input
            inputStyle={styles.input}
            value={item.description}
            onChangeText={Utils.bindFirstParameter(set, 'description')}
            // inputStyle={styles.input}
            placeholder="지출 명 입력..."
          />
        </View>
        <AppText
          onPress={openFinanceDialog}
          style={{color: fItem.colorcode}}
          text={`#${fItem.anothername}`}
        />
        <AppText
          onPress={openCategoryDialog}
          style={{color: '#fff'}}
          text={` #${item.category}`}
        />
      </View>
      <View style={styles.box}>
        <Input
          style={styles.item}
          inputStyle={styles.input}
          value={item.amount.toString()}
          onChangeText={Utils.bindFirstParameter(set, 'amount')}
          // inputStyle={styles.input}
          placeholder="지출 입력..."
        />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    borderWidth: 1,
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: 'gray',
    padding: 5,
    width: '100%',
    alignItems: 'center',
  },
  box: {
    display: 'flex',
    flexDirection: 'row',
  },
  item: {
    flexGrow: 1,
  },
  input: {
    color: '#fff',
    padding: 0,
  },
});
