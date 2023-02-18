import {Dialog} from '@rneui/themed';
import {View} from 'react-native';
import {AppText} from '../../components/AppText';
import {useDeleteFinance} from '../../query/finance';
import DialogActions from '../../components/DialogActions';
import {useState} from 'react';

interface Props {
  visible: boolean;
  toggleDialog: () => void;
  id: number;
}

export default function UserInfoDeleteCardDialog({
  visible,
  toggleDialog,
  id,
}: Props) {
  const {mutateAsync: del} = useDeleteFinance();
  const [alert, setAlert] = useState(false);

  const toggleAlert = () => {
    setAlert(!alert);
  };
  const from = 'alert';

  return (
    <>
      <View>
        <Dialog isVisible={visible} onBackdropPress={toggleDialog}>
          <Dialog.Title title="카드/계좌 삭제" />
          <AppText family="round-d" text="정말 삭제하시겠습니까?" />
          <Dialog.Actions>
            <Dialog.Button title="취소" onPress={() => toggleDialog()} />
            <Dialog.Button
              title="삭제"
              onPress={() => {
                del({financeId: id});
                toggleDialog();
                toggleAlert();
              }}
            />
          </Dialog.Actions>
        </Dialog>
      </View>
      {alert && (
        <DialogActions
          visible={alert}
          toggleDialog={toggleAlert}
          title="알림!"
          contents="삭제되었습니다!"
          from={from}
        />
      )}
    </>
  );
}
