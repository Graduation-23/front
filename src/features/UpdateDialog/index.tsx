import {AppText} from '@/components/AppText';
import {Dialog} from '@rneui/themed';
import {View} from 'react-native';

interface Props {
  visible: boolean;
  toggleDialog: () => void;
}

export default function UpdateDialog({visible, toggleDialog}: Props) {
  return (
    <View>
      <Dialog isVisible={visible} onBackdropPress={toggleDialog}>
        <Dialog.Title title="업데이트 내역" />
        <AppText family="round-d" text="최근 업데이트 된 내역이 없습니다!" />
        <Dialog.Actions>
          <Dialog.Button title="확인" onPress={() => toggleDialog()} />
        </Dialog.Actions>
      </Dialog>
    </View>
  );
}
