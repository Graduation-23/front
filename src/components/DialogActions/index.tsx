import {Dialog} from '@rneui/themed';
import {Text, View} from 'react-native';

interface Props {
  visible: boolean;
  toggleDialog: () => void;
  title: string;
  contents: string;
}

const DialogActions = ({visible, toggleDialog, title, contents}: Props) => {
  return (
    <View>
      <Dialog isVisible={visible} onBackdropPress={toggleDialog}>
        <Dialog.Title title={title} />
        <Text>{contents}</Text>
        <Dialog.Actions>
          <Dialog.Button
            title="아니오"
            onPress={() => {
              toggleDialog();
              console.log('No');
            }}
          />
          <Dialog.Button
            title="예"
            onPress={() => {
              toggleDialog();
              console.log('Yes');
            }}
          />
        </Dialog.Actions>
      </Dialog>
    </View>
  );
};

export default DialogActions;
