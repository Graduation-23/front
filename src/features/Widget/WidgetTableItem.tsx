import {bindFirstParameter as bind} from '@/utils/str';
import {Button, Input} from '@rneui/base';
import {StyleSheet, View} from 'react-native';

interface WidgetTableItem extends Widget.ItemType {
  setItem(item: Widget.ItemType): void;
  last?: boolean;
  openCategoryDialog(): void;
}

export function WidgetTableItem({
  setItem,
  openCategoryDialog,
  ...item
}: WidgetTableItem) {
  const set = (key: keyof Widget.ItemType, value: any) => {
    setItem({...item, [key]: value});
  };

  return (
    <View style={[styles.itemContainer]}>
      <View style={styles.box}>
        <View style={{flexGrow: 1}}>
          <Input
            value={item.description}
            onChangeText={bind(set, 'description')}
            // inputStyle={styles.input}
            placeholder="지출 명 입력..."
          />
        </View>

        <Button onPress={openCategoryDialog} style={styles.item}>
          #{item.category}
        </Button>
      </View>
      <View style={styles.box}>
        {/* 카드/계좌/현금 선택 */}
        <View style={{flexGrow: 1}}>
          <Input
            style={styles.item}
            value={item.amount.toString()}
            onChangeText={bind(set, 'amount')}
            // inputStyle={styles.input}
            placeholder="제목 입력..."
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    borderWidth: 1,
    borderRadius: 6,
    padding: 5,
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
