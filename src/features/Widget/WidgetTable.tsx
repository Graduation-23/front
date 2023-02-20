import {updateByIndex} from '@/utils/array';
import WidgetUtils from '@/utils/widget';
import {useCallback, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import SpendCategoryDialog from '../Category/SpendCategoryDialog';
import {WidgetTableItem} from './WidgetTableItem';

interface WidgetTableProps {
  items: Widget.ItemType[];
  setItems(items: Widget.ItemType[]): void;
}

const _debounce = (fn: any, delay: number) => {
  let watcher: ReturnType<typeof setTimeout>;
  return (...params: any) => {
    if (watcher) {
      clearTimeout(watcher);
    }
    watcher = setTimeout(() => fn(...params), delay);
  };
};

const NEW_ITEM_ID = -1;

export default function WidgetTable({items, setItems}: WidgetTableProps) {
  const [newItem, setNewItem] = useState(WidgetUtils.emptyWidgetItem());
  const [categoryOpenId, setCategoryOpenId] = useState<null | number>(null);

  // #region Handler
  const openCategoryDialog = (i: number) => () => setCategoryOpenId(i);

  const updateItem = useCallback(
    (itemIndex: number, newValue: Partial<Widget.ItemType>) =>
      setItems(
        updateByIndex(items, itemIndex, {...items[itemIndex], ...newValue}),
      ),
    [setItems, items],
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const _updateNewItem = useCallback(
    _debounce((item: Widget.ItemType) => {
      // Append NewItem into Array and set NewItem using Empty Item
      setItems([...items, item]);
      setNewItem(WidgetUtils.emptyWidgetItem());
    }, 500),
    [setNewItem, setItems, items],
  );

  const handleUpdateNewItem = useCallback(
    (newValue: Partial<Widget.ItemType>) => {
      // Check new Value is empty?
      const updatedItem = {...newItem, ...newValue};
      if (!WidgetUtils.isItemEmpty(updatedItem)) {
        setNewItem(updatedItem);
        _updateNewItem(updatedItem);
      }
    },
    [newItem, setNewItem, _updateNewItem],
  );
  // #endregion

  return (
    <>
      <View style={styles.tableContainer}>
        {Array.isArray(items) &&
          items.map((el, i) => (
            <WidgetTableItem
              openCategoryDialog={openCategoryDialog(i)}
              setItem={updateItem.bind(null, i)}
              key={i}
              {...el}
            />
          ))}
        {newItem && (
          <WidgetTableItem
            key={items.length}
            openCategoryDialog={openCategoryDialog(NEW_ITEM_ID)}
            setItem={handleUpdateNewItem}
            {...newItem}
          />
        )}
      </View>
      <SpendCategoryDialog
        onConfirm={(i: number, tag: string) => {
          i === NEW_ITEM_ID
            ? handleUpdateNewItem({category: tag})
            : updateItem(i, {category: tag});
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
