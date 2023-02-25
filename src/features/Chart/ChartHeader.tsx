import {FetchSearchOptions} from '@/api/widget/fetchWidgetByRange';
import {ButtonGroup} from '@rneui/base';
import {useLayoutEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import ChartRangeSearchModal from './ChartRangeSearchModal';

interface ChartHeaderProps {
  options: FetchSearchOptions | null;
  setOptions: (options: FetchSearchOptions) => void;
}

export default function ChartHeader({setOptions}: ChartHeaderProps) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [visible, setVisible] = useState(false);

  useLayoutEffect(() => {
    switch (selectedIndex) {
      case 1:
        setOptions({
          type: 'last-week',
        });
        break;
      case 2:
        setOptions({
          type: 'last-month',
        });
        break;
    }
  }, [selectedIndex, setOptions]);

  const handleSearchYear = (year: number) => {
    setOptions({
      type: 'year',
      payload: {
        year,
      },
    });
  };

  const handleSearchMonth = (year: number, month: number) => {
    setOptions({
      type: 'month',
      payload: {
        year,
        month,
      },
    });
  };

  return (
    <>
      <View style={styles.container}>
        <ButtonGroup
          buttons={['특정 년/월', '이번 주', '이번 한달']}
          selectedIndex={selectedIndex}
          onPress={index => {
            if (index === 0) {
              setVisible(true);
            }
            setSelectedIndex(index);
          }}
          containerStyle={{marginBottom: 20}}
        />
      </View>
      <ChartRangeSearchModal
        visible={visible}
        close={() => setVisible(false)}
        onSearchMonth={handleSearchMonth}
        onSearchYear={handleSearchYear}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    paddingTop: 30,
  },
});
