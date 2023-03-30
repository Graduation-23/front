import {Fragment} from 'react';
import {Platform, StyleSheet, View} from 'react-native';
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
      <View style={styles.Center}>
        {costByYear.map(({year, cost}) => (
          <Fragment key={year}>
            <View style={styles.row}>
              <AppText
                family="round-b"
                style={styles.item}
                text={`${year}년`}
              />
              <AppText
                family="round-b"
                style={styles.item}
                text={`${cost.toLocaleString()}원`}
              />

              <Button
                buttonStyle={styles.Btn}
                onPress={() => {
                  navigate(Account.Chart, {
                    type: 'year',
                    timestamp: new Date(year).valueOf(),
                  });
                }}>
                <AppText family="round-b" text="지출 분석" />
              </Button>
            </View>
            <Divider />
          </Fragment>
        ))}
        <View style={styles.row}>
          <AppText family="round-b" style={styles.item}>
            전체
          </AppText>
          <AppText family="round-b" style={styles.item}>
            {costByYear
              .reduce((acc, cur) => acc + cur.cost, 0)
              .toLocaleString()}
            원
          </AppText>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  Center: {
    width: '95%',
    marginTop: 30,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    ...Platform.select({
      android: {
        elevation: 10,
      },
    }),
  },
  box: {
    flexDirection: 'row',
  },
  Btn: {
    backgroundColor: '#b4dcff',
    borderRadius: 10,
    width: 100,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    padding: 15,
  },
  item: {
    fontSize: 20,
  },
});
