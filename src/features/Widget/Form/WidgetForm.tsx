import useEditWidget from '@/hooks/useEditWidget';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import UpdateWidgetButton from './UpdateWidgetButton';
import WidgetTable from './WidgetTable';
import WidgetUtils from '../../../utils/widget';
import {useCallback, useState, useEffect} from 'react';
import fetchTransactions from '../../../api/fetchTransaction';
import {AppText} from '@/components/AppText';

type WidgetFormProps = Widget.Type;

export default function WidgetForm({...data}: WidgetFormProps) {
  const {widget, set, bind} = useEditWidget(data);
  const [isFetchTransaction, setIsFetchTransaction] = useState(false);

  const addEmptyItemAndFilterEmpty = useCallback(() => {
    set('items', [
      ...widget.items.filter(el => !WidgetUtils.isItemEmpty(el)),
      WidgetUtils.emptyWidgetItem(),
    ]);
  }, [widget.items, set]);

  useEffect(() => {
    if (!isFetchTransaction && widget.items.length === 0) {
      fetchTransactions(widget.date).then(d => {
        set('items', WidgetUtils.transactionToWidgetItems(d) as any);
        setIsFetchTransaction(true);
      });
    }
  }, [isFetchTransaction, setIsFetchTransaction, set, widget]);

  return (
    <View style={styles.container}>
      <WidgetTable setItems={bind('items')} items={widget.items} />
      <View style={styles.ButtonContainer}>
        <View style={styles.Button}>
          <TouchableOpacity onPress={addEmptyItemAndFilterEmpty}>
            <AppText text="소비기록 추가" family="round-b" />
          </TouchableOpacity>
        </View>
        <View style={styles.Button}>
          <UpdateWidgetButton widget={widget} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  ButtonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  Button: {
    backgroundColor: '#f4e284',
    flexGrow: 1,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    marginHorizontal: 15,
  },
});
