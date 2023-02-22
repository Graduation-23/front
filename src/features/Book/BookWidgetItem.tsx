import {AppText} from '@/components/AppText';
import {CashFinance} from '@/constants/finance';
import useFinance from '@/hooks/useFinance';
import {Divider} from '@rneui/base';
import {useMemo} from 'react';
import {StyleSheet, View} from 'react-native';

interface BookWidgetItemProps {
  item: Widget.ItemType;
}

export default function BookWidgetItem({item}: BookWidgetItemProps) {
  const {finances} = useFinance();

  const fin = useMemo(
    () => finances.find(el => el.id === item.financeId) || CashFinance,
    [finances, item],
  );

  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <AppText
            style={[styles.financeText, {backgroundColor: fin.colorcode}]}>
            {fin.anothername}
          </AppText>
          <AppText style={styles.categoryText}>{item.category}</AppText>
        </View>
        <AppText.Subtitle>-{item.amount.toLocaleString()} 원</AppText.Subtitle>
      </View>
      <Divider />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  categoryText: {
    fontSize: 16,
    color: 'gray',
    padding: 4,
    marginLeft: 8,
  },
  financeText: {
    fontSize: 16,
    color: 'white',
    borderRadius: 5,
    padding: 4,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
  },
});
