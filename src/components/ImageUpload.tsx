interface ImageUploadProps {
  newImages: any[];
  setNewImages(images: any[]): void;
}

export default function ImageUpload({
  newImages,
  setNewImages,
}: ImageUploadProps) {}
