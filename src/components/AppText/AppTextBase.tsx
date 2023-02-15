import {StyleSheet, View} from 'react-native';
import {Text} from '@rneui/base';
import {AppTextProps} from '.';

export const AppTextBase = ({
  family,
  style,
  ul,
  text,
  children,
  viewStyle,
  center,
  bold,
  ...props
}: AppTextProps) => {
  const core = (
    <Text
      {...props}
      children={text ? text : children}
      style={[
        textStyles.text,
        family && familyStyles[family],
        center && textStyles.center,
        bold && textStyles.bold,
        style,
      ]}
    />
  );

  return ul ? (
    <View
      children={core}
      style={[viewStyles.base, viewStyles.underline, viewStyle]}
    />
  ) : (
    core
  );
};

const textStyles = StyleSheet.create({
  text: {
    fontSize: 14,
  },
  center: {
    textAlign: 'center',
  },
  bold: {
    fontWeight: 'bold',
  },
});

const viewStyles = StyleSheet.create({
  base: {
    padding: 0,
    paddingBottom: 1,
  },
  underline: {
    borderBottomWidth: 1,
  },
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
