import {updateByIndex} from '@/utils/array';
import WidgetBuilder from '@/utils/widget';
import {Button} from '@rneui/base';
import {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import SpendCategoryDialog from '../Category/SpendCategoryDialog';
import {WidgetTableItem} from './WidgetTableItem';

interface WidgetTableProps {
  originItems: Widget.ItemType[];
  setOriginItems(items: Widget.ItemType[]): void;
}

const LAST_ITEM_IDX = -1;

export default function WidgetTable({
  originItems,
  setOriginItems,
}: WidgetTableProps) {
  const [inputItem, setInputItem] = useState<Widget.ItemType>(
    WidgetBuilder.emptyWidgetItem(),
  );
  const [items, setItems] = useState<Widget.ItemType[]>(originItems);

  const [categoryOpenId, setCategoryOpenId] = useState<null | number>(null);

  const setItem = (i: number) => (newValue: Partial<Widget.ItemType>) => {
    setItems(prev => updateByIndex(prev, i, {...prev[i], ...newValue}));
  };

  const openCategoryDialog = (i: number) => () => setCategoryOpenId(i);

  const appendInputAndNew = () => {
    setItems(prev => [...prev, inputItem]);
    setInputItem(WidgetBuilder.emptyWidgetItem());
  };

  return (
    <>
      <View style={styles.tableContainer}>
        {items &&
          items.map((el, i) => (
            <WidgetTableItem
              openCategoryDialog={openCategoryDialog(i)}
              setItem={setItem(i)}
              key={el.id}
              {...el}
            />
          ))}
        {inputItem && (
          <WidgetTableItem
            last
            openCategoryDialog={openCategoryDialog(LAST_ITEM_IDX)}
            setItem={setInputItem}
            {...inputItem}
          />
        )}
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button onPress={appendInputAndNew}>추가</Button>
          </View>
          <View style={styles.button}>
            <Button style={styles.button} onPress={() => setOriginItems(items)}>
              저장
            </Button>
          </View>
        </View>
      </View>
      <SpendCategoryDialog
        onConfirm={(i: number, tag: string) => {
          if (i === LAST_ITEM_IDX) {
            setInputItem(prev => ({...prev, category: tag}));
            return;
          }
          setItem(i)({category: tag});
        }}
        close={() => setCategoryOpenId(null)}
        openId={categoryOpenId}
      />
    </>
  );
}

const styles = StyleSheet.create({
  tableContainer: {
    width: '100%',
    // backgroundColor: 'black',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  button: {
    flexGrow: 1,
  },
});
