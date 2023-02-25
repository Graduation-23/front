import {AppText} from '@components/AppText';
import ImageUpload from '@components/ImageUpload';
import {File} from '@type/file';
import {Dialog} from '@rneui/themed';
import {useState} from 'react';
import DiaryPreviewGallery from './DiaryPreviewGallery';
import {StyleSheet} from 'react-native';

interface Props {
  selectLimit: number;
  previewImagesUrls: string[];
  appendNewImages(newImages: File[]): void;
  removeImage(imageUrl: string): void;
}

export default function DiaryEditGallery({
  selectLimit,
  previewImagesUrls,
  appendNewImages,
  removeImage,
}: Props) {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const close = () => setSelectedId(null);

  const handlePress = () => {
    if (selectedId) {
      removeImage(selectedId);
    }
    close();
  };

  return (
    <>
      <DiaryPreviewGallery
        onLongPress={id => setSelectedId(id)}
        imageUrls={previewImagesUrls}>
        <ImageUpload
          style={{backgroundColor: '#bab9b994'}}
          selectionLimit={selectLimit}
          setNewImages={appendNewImages}>
          <AppText.Subtitle text="+" />
        </ImageUpload>
      </DiaryPreviewGallery>

      <Dialog
        overlayStyle={styles.dialog}
        isVisible={selectedId !== null}
        onBackdropPress={close}>
        <Dialog.Title title="사진 삭제" />
        <AppText text="해당 이미지를 삭제하시겠습니까?" />
        <Dialog.Actions>
          <Dialog.Button title="예" onPress={handlePress} />
          <Dialog.Button title="아니오" onPress={close} />
        </Dialog.Actions>
      </Dialog>
    </>
  );
}

const styles = StyleSheet.create({
  dialog: {
    backgroundColor: 'white',
  },
});
