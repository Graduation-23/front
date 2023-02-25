import {useMemo} from 'react';
import {StyleSheet, View} from 'react-native';
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
    <View style={styles.container}>
      <AppText
        style={styles.subtitle}
        text={`${at.getMonth() + 1}월 총 지출 금액`}
      />
      <View style={styles.content}>
        <AppText.Title text={`${totalCost.toLocaleString()}원`} />
        <Button
          buttonStyle={styles.analysisButton}
          onPress={handleNavigateAnalysis}>
          <AppText style={styles.analysisText} text="지출 분석" />
        </Button>
      </View>
      <AppText style={styles.informationText} text={`총 ${count} 결제`} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingTop: 50,
    marginBottom: 20,
    paddingHorizontal: 15,
    paddingBottom: 25,
  },
  subtitle: {
    color: 'gray',
    fontWeight: 'bold',
    fontSize: 17,
    paddingBottom: 10,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  analysisText: {
    color: 'white',
    fontSize: 16,
  },
  analysisButton: {
    backgroundColor: '#3083ff',
    borderRadius: 10,
  },
  informationText: {
    color: 'gray',
    fontSize: 15,
    paddingLeft: 5,
  },
});
