import {Text} from '@rneui/base';
import Cloud from './Cloud';
import Rain from './Rain';
import Sunny from './Sunny';

interface WeatherIconProps {
  type?: string;
}

export default function WeatherIcon({type = 'sunny'}: WeatherIconProps) {
  switch (type) {
    case 'sunny':
      return <Sunny />;
    case 'cloud':
      return <Cloud />;
    case 'rain':
      return <Rain />;
    default:
      return <Text>Error</Text>;
  }
}
