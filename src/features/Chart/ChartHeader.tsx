/* eslint-disable react-native/no-inline-styles */
import {FetchSearchOptions} from '@/api/widget/fetchWidgetByRange';
import {AppText} from '@/components/AppText';
import {ButtonGroup} from '@rneui/base';
import {useLayoutEffect, useState} from 'react';
import {Platform, StyleSheet, View} from 'react-native';
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
      <View style={styles.Container}>
        <View style={styles.container}>
          <ButtonGroup
            buttons={[
              <AppText family="round-b" text="특정 년/월" />,
              <AppText family="round-b" text="이번 주" />,
              <AppText family="round-b" text="이번 달" />,
            ]}
            //buttons={['특정 년/월', '이번 주', '이번 한달']}
            selectedIndex={selectedIndex}
            onPress={index => {
              if (index === 0) {
                setVisible(true);
              }
              setSelectedIndex(index);
            }}
            containerStyle={{borderRadius: 10, borderColor: 'white'}}
            selectedButtonStyle={{backgroundColor: '#b4dcff'}}
            buttonStyle={{borderRadius: 10}}
            buttonContainerStyle={{borderColor: 'white', borderRadius: 10}}
          />
        </View>
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
  Container: {
    alignItems: 'center',
  },
  container: {
    backgroundColor: 'white',
    padding: 10,
    width: '90%',
    borderRadius: 15,
    marginVertical: 20,
    ...Platform.select({
      android: {
        elevation: 10,
      },
    }),
  },
});
