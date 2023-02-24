import {AppText} from '@/components/AppText';
import {ButtonGroup, Dialog} from '@rneui/base';
import {Input} from '@rneui/themed';
import {useState} from 'react';
import {View, StyleSheet} from 'react-native';

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
      overlayStyle={{backgroundColor: 'white'}}
      isVisible={visible}
      onBackdropPress={close}>
      <Dialog.Title title="통계 범위 검색" />
      <ButtonGroup
        buttons={['특정 년', '특정 월']}
        selectedIndex={searchTypeIndex}
        onPress={setSearchTypeIndex}
        containerStyle={{marginBottom: 20}}
      />
      <View style={styles.row}>
        <Input
          value={searchYear}
          containerStyle={styles.inputContainer}
          inputStyle={styles.input}
          onChangeText={setSearchYear}
          placeholder="년 입력"
        />
        <AppText mv={15} center family="round-c" text="년" />
        {searchTypeIndex === 1 && (
          <>
            <Input
              containerStyle={styles.inputContainer}
              inputStyle={styles.input}
              value={searchMonth}
              onChangeText={setSearchMonth}
              placeholder="월 입력"
            />
            <AppText mv={15} center family="round-c" text="월" />
          </>
        )}
      </View>
      <Dialog.Actions>
        <Dialog.Button
          title="설정"
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
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  inputContainer: {
    width: 100,
    padding: 0,
  },
  input: {
    padding: 0,
    textAlign: 'right',
    margin: 0,
  },
});
