import Utils from '@/utils';
import WidgetUtils from '@/utils/widget';
import {useCallback, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import SpendCategoryDialog from '../Category/SpendCategoryDialog';
import {WidgetTableItem} from './WidgetTableItem';
import FinanceDialog from '../Finance/FinanceDialog';

interface WidgetTableProps {
  items: Widget.ItemType[];
  setItems(items: Widget.ItemType[]): void;
}

export default function WidgetTable({items, setItems}: WidgetTableProps) {
  const [categoryOpenId, setCategoryOpenId] = useState<null | number>(null);
  const [financeOpenId, setFinanceOpenId] = useState<null | number>(null);

  // #region Handler
  const openFinanceDialog = (i: number) => () => setFinanceOpenId(i);
  const openCategoryDialog = (i: number) => () => setCategoryOpenId(i);

  const updateItem = useCallback(
    (itemIndex: number, newValue: Partial<Widget.ItemType>) =>
      setItems(
        Utils.updateByIndex(items, itemIndex, {
          ...items[itemIndex],
          ...newValue,
        }),
      ),
    [setItems, items],
  );

  const appendNewItem = useCallback(() => {
    setItems([...items, WidgetUtils.emptyWidgetItem()]);
  }, [items, setItems]);

  // #endregion

  return (
    <>
      <View style={styles.tableContainer}>
        {Array.isArray(items) &&
          items.map((el, i) => (
            <WidgetTableItem
              openFinanceDialog={openFinanceDialog(i)}
              openCategoryDialog={openCategoryDialog(i)}
              setItem={updateItem.bind(null, i)}
              key={i}
              {...el}
            />
          ))}
      </View>
      <SpendCategoryDialog
        onConfirm={(i: number, tag: string) => updateItem(i, {category: tag})}
        close={() => setCategoryOpenId(null)}
        openId={categoryOpenId}
      />
      <FinanceDialog
        onConfirm={(i: number, fid) => updateItem(i, {financeId: fid})}
        close={() => setFinanceOpenId(null)}
        openId={financeOpenId}
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
