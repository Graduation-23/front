import {Dialog} from '@rneui/base';
import {useState} from 'react';
import FinanceView from './FinanceView';

interface FinanceDialogProps {
  onConfirm(sourceId: string | number, fid: number): void;
  close(): void;
  openId: string | number | null;
}

export default function FinanceDialog({
  onConfirm,
  close,
  openId,
}: FinanceDialogProps) {
  const [tag, setTag] = useState(0);

  const handleConfirm = () => {
    if (openId !== null) {
      onConfirm(openId, tag);
    }
    close();
  };

  return (
    <Dialog
      overlayStyle={{backgroundColor: 'white'}}
      isVisible={openId !== null}
      onBackdropPress={close}>
      <Dialog.Title title="소비 카테고리" />
      <FinanceView fid={tag} setFid={setTag} />
      <Dialog.Actions>
        <Dialog.Button title="선택" onPress={handleConfirm} />
        <Dialog.Button title="닫기" onPress={close} />
      </Dialog.Actions>
    </Dialog>
  );
}
