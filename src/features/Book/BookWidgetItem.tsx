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
            family="round-b"
            style={[styles.financeText, {color: fin.colorcode}]}>
            #{fin.anothername}
          </AppText>
          <AppText family="round-b" style={styles.categoryText}>
            #{item.category} - {item.description}
          </AppText>
        </View>
        <AppText.Subtitle family="round-b" style={styles.amount}>
          - {item.amount.toLocaleString()} 원
        </AppText.Subtitle>
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
    color: 'black',
    marginLeft: 8,
  },
  financeText: {
    color: 'black',
    padding: 0,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  amount: {
    marginTop: 5,
  },
});
