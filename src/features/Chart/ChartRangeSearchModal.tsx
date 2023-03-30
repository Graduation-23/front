/* eslint-disable react-native/no-inline-styles */
import {AppText} from '@/components/AppText';
import {ButtonGroup, Dialog} from '@rneui/themed';
import {useState} from 'react';
import {View, StyleSheet, TextInput, Platform} from 'react-native';

interface ChartRangeSearchModalProps {
  visible: boolean;
  close(): void;
  onSearchYear(year: number): void;
  onSearchMonth(year: number, month: number): void;
}

export default function ChartRangeSearchModal({
  visible,
  close,
  onSearchMonth,
  onSearchYear,
}: ChartRangeSearchModalProps) {
  const [searchTypeIndex, setSearchTypeIndex] = useState(0);
  const [searchYear, setSearchYear] = useState('2023');
  const [searchMonth, setSearchMonth] = useState('03');
  return (
    <Dialog
      isVisible={visible}
      onBackdropPress={close}
      overlayStyle={{borderRadius: 20}}>
      <AppText.Title
        family="round-b"
        text="통계 범위 검색"
        style={styles.Title}
      />
      <ButtonGroup
        buttons={[
          <AppText family="round-b" text="특정 년" />,
          <AppText family="round-b" text="특정 월" />,
        ]}
        selectedIndex={searchTypeIndex}
        onPress={setSearchTypeIndex}
        containerStyle={{
          borderRadius: 10,
          borderColor: 'white',
          width: '80%',
        }}
        selectedButtonStyle={{backgroundColor: '#b4dcff'}}
        buttonStyle={{borderRadius: 10}}
        buttonContainerStyle={{borderColor: 'white', borderRadius: 10}}
      />
      <View style={styles.row}>
        <TextInput
          value={searchYear}
          style={styles.input}
          onChangeText={setSearchYear}
          placeholder="년 입력"
          keyboardType="numeric"
        />
        <AppText center family="round-b" text="년" />
        {searchTypeIndex === 1 && (
          <>
            <TextInput
              style={styles.input}
              value={searchMonth}
              onChangeText={setSearchMonth}
              placeholder="월 입력"
              keyboardType="numeric"
            />
            <AppText center family="round-b" text="월" />
          </>
        )}
      </View>
      <Dialog.Actions>
        <Dialog.Button
          title="확인"
          onPress={() => {
            if (searchTypeIndex === 0) {
              onSearchYear(parseInt(searchYear));
            } else {
              onSearchMonth(parseInt(searchYear), parseInt(searchMonth));
            }
            close();
          }}
        />
        <Dialog.Button title="취소" onPress={close} />
      </Dialog.Actions>
    </Dialog>
  );
}

const styles = StyleSheet.create({
  Title: {
    marginBottom: 10,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    textAlign: 'right',
    ...Platform.select({
      android: {
        fontFamily: 'Ownglyph_yoxaiov-Rg',
        fontSize: 20,
      },
    }),
  },
});
