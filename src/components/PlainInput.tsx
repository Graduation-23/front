import {TextInput, TextInputProps, StyleSheet, Platform} from 'react-native';

interface PlainInputProps extends TextInputProps {}

const PlainInput = ({...props}: PlainInputProps) => {
  return <TextInput {...props} style={styles.input} />;
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'white',
    paddingLeft: 10,
    borderRadius: 10,
    borderWidth: 2,
    marginBottom: 20,
    height: 50,
    fontSize: 16,
    borderColor: '#8AACC8',
    ...Platform.select({
      android: {
        fontFamily: 'Ownglyph_yoxaiov-Rg',
        fontSize: 20,
      },
    }),
  },
});

export default PlainInput;
