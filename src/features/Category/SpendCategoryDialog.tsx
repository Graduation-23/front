import {Dialog} from '@rneui/base';
import {useState} from 'react';
import CategoryView from './CategoryView';

interface SpendCategoryDialogProps {
  onConfirm(sourceId: string | number, tag: string): void;
  close(): void;
  openId: string | number | null;
}

export default function SpendCategoryDialog({
  onConfirm,
  close,
  openId,
}: SpendCategoryDialogProps) {
  const [tag, setTag] = useState('');

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
      <CategoryView tag={tag} setTag={setTag} />
      <Dialog.Actions>
        <Dialog.Button title="선택" onPress={handleConfirm} />
        <Dialog.Button title="닫기" onPress={close} />
      </Dialog.Actions>
    </Dialog>
  );
}
