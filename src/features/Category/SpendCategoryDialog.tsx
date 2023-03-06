import {AppText} from '@/components/AppText';
import {Dialog} from '@rneui/themed';
import {useState} from 'react';
import {StyleSheet} from 'react-native';
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
      isVisible={openId !== null}
      onBackdropPress={close}
      overlayStyle={styles.DialogContainer}>
      <AppText.Title text="Category" family="round-b" style={styles.Title} />
      <CategoryView tag={tag} setTag={setTag} />
      <Dialog.Actions>
        <Dialog.Button title="선택" onPress={handleConfirm} />
      </Dialog.Actions>
    </Dialog>
  );
}

const styles = StyleSheet.create({
  Title: {
    paddingLeft: 10,
  },
  DialogContainer: {
    width: '85%',
    paddingHorizontal: 10,
  },
});
