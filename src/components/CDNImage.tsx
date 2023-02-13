import {Image} from '@rneui/base';

type CDNImageProps = {
  url: string;
};

function getUri(id: string) {
  return `https://res.cloudinary.com/demo/image/upload/${id}`;
}

export default function CDNImage({url}: CDNImageProps) {
  return <Image source={{uri: getUri(url)}} resizeMode="cover" />;
}
