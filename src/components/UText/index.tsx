import {StyleProp, Text, TextProps, TextStyle} from 'react-native';

export type UTextProps = {
  smooth?: boolean;
} & TextProps;

const globalTextStyle: StyleProp<TextStyle> = {};

const basicTextStyle: StyleProp<TextStyle> = {
  ...globalTextStyle,
};

const smoothTextStyle: StyleProp<TextStyle> = {
  ...globalTextStyle,
  fontFamily: 'Cafe24Oneprettynight',
};

const UText = ({smooth = false, style, ...props}: UTextProps) => {
  return (
    <Text
      style={{
        ...(smooth ? smoothTextStyle : basicTextStyle),
        ...(style as object),
      }}
      {...props}
    />
  );
};

export default UText;
