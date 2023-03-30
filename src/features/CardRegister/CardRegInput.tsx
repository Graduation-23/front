import {View, StyleSheet, TextInput} from 'react-native';
import {AppText} from '@components/AppText';

type CardRegInputProps = {
  text: string;
  value: string;
  onChange: (input: string) => void;
};

export default function CardRegInput({
  text,
  value,
  onChange,
}: CardRegInputProps) {
  const onChangeText = (t: string) => {
    onChange(t);
  };

  return (
    <>
      <View style={styles.InputContainer}>
        <AppText family="round-b" text={text} style={styles.FontSize20} />
        <TextInput
          style={styles.Input}
          placeholder={`${text} 입력`}
          onChangeText={onChangeText}
          value={value}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  InputContainer: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 20,
  },
  FontSize20: {
    fontSize: 20,
  },
  Input: {
    fontFamily: 'Ownglyph_yoxaiov-Rg',
    fontSize: 20,
    borderBottomWidth: 0.5,
    paddingBottom: 7,
    marginLeft: 10,
    width: 150,
  },
});
