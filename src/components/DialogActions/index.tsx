/* eslint-disable no-lone-blocks */
import {Dialog} from '@rneui/themed';
import {Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Entry} from '@constants/screen';

interface Props {
  visible: boolean;
  toggleDialog: () => void;
  title: string;
  contents: string;
  from: string;
}

const DialogActions = ({
  visible,
  toggleDialog,
  title,
  contents,
  from,
}: Props) => {
  const {navigate} = useNavigation<any>();
  return (
    <View>
      <Dialog isVisible={visible} onBackdropPress={toggleDialog}>
        <Dialog.Title title={title} />
        <Text>{contents}</Text>
        <Dialog.Actions>
          <Dialog.Button
            title="확인"
            onPress={() => {
              {
                from === 'Complete'
                  ? (navigate(Entry.Content), toggleDialog())
                  : toggleDialog();
              }
            }}
          />
        </Dialog.Actions>
      </Dialog>
    </View>
  );
};

export default DialogActions;
