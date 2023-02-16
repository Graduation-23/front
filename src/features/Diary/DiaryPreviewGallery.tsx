import {Image} from '@rneui/base';
import {ScrollView} from 'react-native';
import {DEFAULT_IMG_SOURCE} from '../../constants/img';

interface DiaryPreviewGalleryProps {
  thumbnailIdx: number;
  imageUrls: string[];
}

export default function DiaryPreviewGallery({
  thumbnailIdx,
  imageUrls,
}: DiaryPreviewGalleryProps) {
  return (
    <ScrollView>
      <Image
        style={{
          width: 70,
          height: 70,
        }}
        source={{
          uri:
            thumbnailIdx === -1 ? DEFAULT_IMG_SOURCE : imageUrls[thumbnailIdx],
        }}
      />
    </ScrollView>
  );
}
