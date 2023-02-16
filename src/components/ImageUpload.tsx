import {Button} from '@rneui/base';
import {Platform} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import logger from '../utils/logger';
import {transformPhotoForUpload} from '../utils/photo';

interface ImageUploadProps {
  setNewImages(images: any[]): void;
}

export default function ImageUpload({setNewImages}: ImageUploadProps) {
  const handleChoosePhoto = () => {
    launchImageLibrary(
      {mediaType: 'photo', includeBase64: Platform.OS === 'android'},
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

  return <Button onPress={handleChoosePhoto}>choose Photo</Button>;
}
