import Utils from '@/utils';
import {
  StyleSheet,
  View,
  Platform,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import useFinance from '@hooks/useFinance';
import {useMemo} from 'react';
import {AppText} from '@/components/AppText';
import {CashFinance} from '@/constants/finance';
import LinearGradient from 'react-native-linear-gradient';

interface WidgetTableItem extends Widget.ItemType {
  setItem(item: Widget.ItemType): void;
  openCategoryDialog(): void;
  openFinanceDialog(): void;
  onLongPress(): void;
}

export function WidgetTableItem({
  setItem,
  onLongPress,
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
    <TouchableOpacity activeOpacity={1} onLongPress={onLongPress}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={styles.itemContainer}
        colors={['#89bad7cc', '#74b3d8cc']}>
        <View style={styles.box}>
          <TextInput
            style={styles.input}
            value={item.description}
            onChangeText={Utils.bindFirstParameter(set, 'description')}
            placeholder="지출명"
          />
          <View style={styles.Comment}>
            <AppText.Subtitle
              family="round-b"
              onPress={openFinanceDialog}
              style={{color: fItem.colorcode}}
              text={`#${fItem.anothername} `}
            />
            <AppText.Subtitle
              family="round-b"
              onPress={openCategoryDialog}
              text={` #${item.category} `}
            />
          </View>
        </View>
        <View style={styles.box}>
          <TextInput
            style={styles.input}
            value={item.amount.toString()}
            onChangeText={Utils.bindFirstParameter(set, 'amount')}
            placeholder="지출 금액을 작성해주세요."
            keyboardType="numeric"
          />
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    marginBottom: 15,
    borderRadius: 10,
    padding: 5,
    width: '100%',
  },
  Comment: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  box: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    paddingHorizontal: 5,
    ...Platform.select({
      android: {
        fontFamily: 'Ownglyph_yoxaiov-Rg',
        fontSize: 22,
      },
    }),
  },
});
