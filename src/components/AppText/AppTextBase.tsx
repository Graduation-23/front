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
  mh,
  mv,
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
        mh && textBlackBoxStyles.mh(mh),
        mv && textBlackBoxStyles.mv(mv),
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
    fontSize: 20,
  },
  center: {
    textAlign: 'center',
  },
  bold: {
    fontWeight: 'bold',
  },
});

const textBlackBoxStyles = {
  mh: (level: number) => ({
    marginHorizontal: level,
  }),
  mv: (level: number) => ({
    marginVertical: level,
  }),
};

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
