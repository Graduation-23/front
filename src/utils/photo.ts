interface Photo {
  fileName: string;
  fileSize: number;
  type: string;
  uri: string;
  data: string;
}

export const transformPhotoForUpload = (photo: Photo | any) => {
  return {
    name: photo.fileName,
    type: 'multipart/form-data',
    uri: photo.uri,
    data: photo.data,
  };
};
