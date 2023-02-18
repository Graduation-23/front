import DialogActions from '../../components/DialogActions';

interface Props {
  visible: boolean;
  toggleAlert: () => void;
}

export default function CardRegAlert({visible, toggleAlert}: Props) {
  const from = 'alert';
  return (
    <>
      <DialogActions
        visible={visible}
        toggleDialog={toggleAlert}
        title="알림!"
        contents="카드/계좌는 최대 5개까지 등록 가능합니다."
        from={from}
      />
    </>
    // <View>
    //   <Dialog isVisible={visible}>
    //     <Dialog.Title title="알림!" />
    //     <AppText>카드/계좌는 최대 5개까지 등록 가능합니다.</AppText>
    //     <Dialog.Actions>
    //       <Dialog.Button
    //         title="확인"
    //         onPress={() => {
    //           toggleAlert();
    //         }}
    //       />
    //     </Dialog.Actions>
    //   </Dialog>
    // </View>
  );
}
