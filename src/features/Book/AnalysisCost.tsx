import {useMemo} from 'react';
import {StyleSheet, View, Platform} from 'react-native';
import {AppText} from '@components/AppText';
import {Button} from '@rneui/base';
import {useNavigation} from '@react-navigation/native';
import {Account} from '@/constants/screen';

interface AnalysisCostProps {
  items: Widget.Type[];
  at: Date;
}

export default function AnalysisCost({items, at}: AnalysisCostProps) {
  const {navigate} = useNavigation<any>();

  const totalCost = useMemo(() => {
    return items.reduce((acc, item) => acc + item.totalCost, 0);
  }, [items]);

  const handleNavigateAnalysis = () => {
    navigate(Account.Chart, {timestamp: at.valueOf()});
  };

  const count = useMemo(() => {
    return items.reduce((acc, item) => acc + item.items.length, 0);
  }, [items]);

  return (
    <View style={styles.Container}>
      <View style={styles.container}>
        <AppText.Title
          style={styles.subtitle}
          family="round-b"
          text={`${at.getMonth() + 1}월 총 지출 금액`}
        />
        <View style={styles.content}>
          <AppText.Subtitle
            style={styles.leftPadding}
            family="round-b"
            text={`${totalCost.toLocaleString()}원`}
          />
        </View>
        <View style={styles.Bottom}>
          <AppText
            family="round-b"
            style={styles.informationText}
            text={`총 ${count} 건 결제`}
          />
          <Button
            buttonStyle={styles.analysisButton}
            onPress={handleNavigateAnalysis}>
            <AppText family="round-b" text="지출 분석" />
          </Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },
  container: {
    width: '90%',
    backgroundColor: 'white',
    paddingVertical: 20,
    paddingHorizontal: 15,
    marginBottom: 20,
    borderRadius: 20,
    ...Platform.select({
      android: {
        elevation: 10,
      },
    }),
  },
  Bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
  },
  subtitle: {
    paddingBottom: 10,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  analysisButton: {
    backgroundColor: '#b4dcff',
    borderRadius: 10,
  },
  informationText: {
    color: 'gray',
    fontSize: 15,
    paddingLeft: 5,
  },
  leftPadding: {
    paddingLeft: 5,
  },
});
