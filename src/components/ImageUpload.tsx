import {ReactNode} from 'react';
import {
  Platform,
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import logger from '../utils/logger';
import {transformPhotoForUpload} from '../utils/photo';

interface ImageUploadProps {
  style?: StyleProp<ViewStyle>;
  children: ReactNode;
  setNewImages(images: any[]): void;
  selectionLimit?: number;
}

export default function ImageUpload({
  setNewImages,
  style,
  selectionLimit = 1,
  children,
}: ImageUploadProps) {
  const handleChoosePhoto = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        includeBase64: Platform.OS === 'android',
        selectionLimit,
      },
      response => {
        if (response.didCancel) {
          return;
        } else if (response.errorCode) {
          logger.log(response.errorCode, response.errorMessage);
        } else {
          setNewImages(response.assets?.map(transformPhotoForUpload) || []);
        }
      },
    );
  };

  return (
    <TouchableOpacity style={[styles.base, style]} onPress={handleChoosePhoto}>
      {children}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  base: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
});
