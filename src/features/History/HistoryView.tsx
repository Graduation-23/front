import {Fragment} from 'react';
import {StyleSheet, View} from 'react-native';
import {AppText} from '@/components/AppText';
import {useNavigation} from '@react-navigation/native';
import {Account} from '@/constants/screen';
import {Button, Divider} from '@rneui/base';

interface HistoryViewProps {
  costByYear: {cost: number; year: string}[];
}

export default function HistoryView({costByYear}: HistoryViewProps) {
  const {navigate} = useNavigation<any>();

  return (
    <View style={styles.container}>
      {costByYear.map(({year, cost}) => (
        <Fragment key={year}>
          <View style={styles.row}>
            <AppText style={styles.item}>{year}년</AppText>
            <AppText style={styles.item}>{cost.toLocaleString()}원</AppText>
            <Button
              onPress={() => {
                navigate(Account.Chart, {
                  type: 'year',
                  timestamp: new Date(year).valueOf(),
                });
              }}>
              통계
            </Button>
          </View>
          <Divider />
        </Fragment>
      ))}
      <View style={styles.row}>
        <AppText style={styles.item}>전체</AppText>
        <AppText style={styles.item}>
          {costByYear.reduce((acc, cur) => acc + cur.cost, 0).toLocaleString()}
          원
        </AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginTop: 30,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  item: {
    fontSize: 20,
  },
});
