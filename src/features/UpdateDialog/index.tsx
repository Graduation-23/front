import {AppText} from '@/components/AppText';
import {Dialog} from '@rneui/themed';
import {StyleSheet, View} from 'react-native';

interface Props {
  visible: boolean;
  toggleDialog: () => void;
}

export default function UpdateDialog({visible, toggleDialog}: Props) {
  return (
    <View>
      <Dialog
        isVisible={visible}
        onBackdropPress={toggleDialog}
        overlayStyle={styles.DialogContainer}>
        <AppText.Title
          family="round-b"
          text="업데이트 내역"
          style={styles.Title}
        />
        <AppText family="round-b" text="최근 업데이트 된 내역이 없습니다!" />
        <Dialog.Actions>
          <Dialog.Button title="확인" onPress={() => toggleDialog()} />
        </Dialog.Actions>
      </Dialog>
    </View>
  );
}

const styles = StyleSheet.create({
  DialogContainer: {
    borderRadius: 20,
  },
  Title: {
    marginBottom: 10,
  },
});
