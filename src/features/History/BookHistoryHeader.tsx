import {AppText} from '@/components/AppText';
import {ButtonGroup} from '@rneui/base';
import {vi} from 'date-fns/locale';
import {useLayoutEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import YearSelectModal from './YearSelectModal';

interface BookHistoryHeaderProps {
  currentYear: number;
  setCurrentYear: (year: number) => void;
}

export default function BookHistoryHeader({
  currentYear,
  setCurrentYear,
}: BookHistoryHeaderProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [visible, setVisible] = useState(false);

  useLayoutEffect(() => {
    if (selectedIndex === 0) {
      setCurrentYear(new Date().getFullYear());
    }
  }, [selectedIndex, setCurrentYear]);

  return (
    <View style={styles.container}>
      {/* <ButtonGroup
        buttons={['이번 년', '특정 년/월']}
        selectedIndex={selectedIndex}
        onPress={index => {
          if (index === 1) {
            setVisible(true);
          }
          setSelectedIndex(index);
        }}
        containerStyle={{marginBottom: 20}}
      />
      <YearSelectModal
        visible={visible}
        onConfirm={setCurrentYear}
        close={() => setVisible(false)}
      /> */}
      <AppText style={styles.yearText}>연혁</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    backgroundColor: '#fff',
  },
  yearText: {
    color: 'gray',
    fontWeight: 'bold',
    fontSize: 28,
    paddingLeft: 20,
  },
});
