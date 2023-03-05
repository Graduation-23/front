import {Text} from '@rneui/base';
import {StyleSheet, View} from 'react-native';
import WeatherIcon from './WeatherIcon';

interface WeatherSelectorProps {
  weather: string;
  setWeather(weather: string): void;
}

const weatherType = ['sunny', 'cloud', 'rain'];

export default function WeatherSelector({
  weather,
  setWeather,
}: WeatherSelectorProps) {
  return (
    <View style={styles.container}>
      {weatherType.map(el => (
        <Text
          key={el}
          onPress={() => setWeather(el)}
          style={[styles.base, el === weather && styles.focus]}>
          <WeatherIcon key={el} type={el} />
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  base: {
    padding: 5,
    borderRadius: 7,
    fontSize: 20,
  },
  focus: {
    backgroundColor: 'rgba(148, 198, 227, 0.66)',
  },
});
