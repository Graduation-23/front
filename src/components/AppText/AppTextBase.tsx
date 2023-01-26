import {StyleSheet, Text} from 'react-native';
import {AppTextProps} from '.';

export const AppTextBase = ({family, style, ...props}: AppTextProps) => {
  return (
    <Text
      {...props}
      style={[styles.text, family && familyStyles[family], style]}
    />
  );
};

const styles = StyleSheet.create({
  text: {},
});

const familyStyles = StyleSheet.create<{
  [T in NonNullable<AppTextProps['family']>]: object;
}>({
  'round-a': {
    fontFamily: 'Cafe24Oneprettynight',
  },
  'round-b': {
    fontFamily: 'Ownglyph_yoxaiov-Rg',
  },
  'round-c': {
    fontFamily: 'Ownglyph_alcomhagom-Rg',
  },
  'round-d': {
    fontFamily: 'Ownglyph_kstudentminseo-Rg',
  },
});
