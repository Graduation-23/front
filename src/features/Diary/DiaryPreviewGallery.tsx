import {Image} from '@rneui/base';
import {ReactNode} from 'react';
import {ScrollView, View} from 'react-native';
// import {DEFAULT_IMG_SOURCE} from '@constants/img';

interface DiaryPreviewGalleryProps {
  thumbnailIdx?: number;
  imageUrls: string[];
  onLongPress?(imageUrl: string): void;
  children?: ReactNode;
}

const GalleryItem = ({children}: {children: ReactNode}) => {
  return (
    <View
      style={{
        width: 70,
        height: 70,
        marginRight: 10,
        borderRadius: 7,
        overflow: 'hidden',
      }}>
      {children}
    </View>
  );
};

export default function DiaryPreviewGallery({
  imageUrls,
  onLongPress = () => {},
  children = '',
}: DiaryPreviewGalleryProps) {
  return (
    <ScrollView>
      <View style={{display: 'flex', flexDirection: 'row'}}>
        {Array.isArray(imageUrls) &&
          imageUrls.map(el => (
            <GalleryItem key={el}>
              <Image
                onLongPress={onLongPress.bind(null, el)}
                style={{
                  width: '100%',
                  height: '100%',
                }}
                source={{
                  uri: el,
                }}
              />
            </GalleryItem>
          ))}
        <GalleryItem>{children}</GalleryItem>
      </View>
    </ScrollView>
  );
}
