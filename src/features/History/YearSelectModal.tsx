import {Dialog} from '@rneui/base';
import {Input} from '@rneui/themed';
import {StyleSheet, View} from 'react-native';
import {AppText} from '@/components/AppText';
import {useState} from 'react';

interface YearSelectModalProps {
  visible: boolean;
  close(): void;
  onConfirm(year: number): void;
}

export default function YearSelectModal({
  visible,
  close,
  onConfirm,
}: YearSelectModalProps) {
  const [searchYear, setSearchYear] = useState('2023');

  return (
    <Dialog
      overlayStyle={{backgroundColor: 'white'}}
      isVisible={visible}
      onBackdropPress={close}>
      <Dialog.Title title="검색" />
      <View style={styles.row}>
        <Input
          value={searchYear}
          containerStyle={styles.inputContainer}
          inputStyle={styles.input}
          onChangeText={setSearchYear}
          placeholder="년 입력"
        />
        <AppText mv={15} center family="round-c" text="년" />
      </View>
      <Dialog.Actions>
        <Dialog.Button
          title="설정"
          onPress={() => {
            onConfirm(parseInt(searchYear));
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
