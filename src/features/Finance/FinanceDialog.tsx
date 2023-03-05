import {AppText} from '@/components/AppText';
import {Dialog} from '@rneui/themed';
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
    <Dialog isVisible={openId !== null} onBackdropPress={close}>
      <AppText.Subtitle family="round-b" text="카드/계좌 선택" />
      <FinanceView fid={tag} setFid={setTag} />
      <Dialog.Actions>
        <Dialog.Button title="선택" onPress={handleConfirm} />
      </Dialog.Actions>
    </Dialog>
  );
}
