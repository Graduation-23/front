import DialogActions from '../../components/DialogActions';

interface Props {
  visible: boolean;
  toggleDialog: () => void;
}

const RegCompleteDialog = ({visible, toggleDialog}: Props) => {
  const from = 'Complete';
  return (
    <>
      <DialogActions
        visible={visible}
        toggleDialog={toggleDialog}
        title="알림!"
        contents="생일과 카드/계좌는 설정 탭에서 추가 및 변경 가능합니다."
        from={from}
      />
    </>
  );
};

export default RegCompleteDialog;
